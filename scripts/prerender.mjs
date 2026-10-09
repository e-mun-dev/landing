/**
 * AdSense 크롤러는 JavaScript 를 실행하지 않는다. 광고 스크립트가 로드되는
 * HTML 에 게시자 본문이 없으면 "게시자 콘텐츠가 없는 화면" 정책 위반이므로
 * 모든 페이지를 빌드 타임에 정적 HTML 로 구워둔다.
 *
 * 흐름: vite 본빌드(dist/client) → entry-server 를 SSR 번들로 따로
 * 빌드 → renderToString 결과와 head 를 index.html 껍데기에 주입 →
 * dist/client/index.html, dist/client/privacy/index.html 덮어쓰기.
 */
import { build } from "vite";
import react from "@vitejs/plugin-react";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const serverOut = resolve(root, "dist/prerender-server");
const clientDir = resolve(root, "dist/client");

// 1) SSR 번들. 본빌드의 cloudflare 플러그인을 섞지 않는다 — 브라우저용이 아니다.
await build({
	root,
	configFile: false,
	plugins: [react()],
	build: {
		ssr: resolve(root, "src/react-app/entry-server.tsx"),
		outDir: serverOut,
		emptyOutDir: true,
	},
	logLevel: "warn",
});

// 2) 본빌드가 남긴 index.html 껍데기를 읽는다.
const shell = await readFile(resolve(clientDir, "index.html"), "utf8");
const ROOT_DIV = '<div id="root"></div>';
if (!shell.includes(ROOT_DIV)) {
	throw new Error("prerender: index.html 에 #root 빈 div 가 없다. 빌드 산출물 확인.");
}

// 3) 경로별 렌더. title/meta description 도 페이지에 맞게 교체한다.
const { prerenderPages } = await import(pathToFileURL(resolve(serverOut, "entry-server.js")).href);

for (const page of prerenderPages()) {
	let html = shell
		.replace(ROOT_DIV, `<div id="root">${page.html}</div>`)
		.replace(/<title>[\s\S]*?<\/title>/, `<title>${page.title}</title>`)
		.replace(
			/<meta name="description" content="[^"]*"/,
			`<meta name="description" content="${page.description}"`,
		);

	// 크롤러용 표준 경로. canonical 이 없는 껍데기엔 추가한다.
	const url = page.file === "index.html" ? "https://e-mun.com/" : "https://e-mun.com/privacy/";
	html = html.replace(
		"</title>",
		`</title>\n\t\t<link rel="canonical" href="${url}"`,
	);

	const target = resolve(clientDir, page.file);
	await mkdir(dirname(target), { recursive: true });
	await writeFile(target, html, "utf8");
	console.log(`prerender: ${page.file} (+${(html.length / 1024).toFixed(1)}KB)`);
}

// 4) SSR 번들은 배포에 필요 없다.
await rm(serverOut, { recursive: true, force: true });
