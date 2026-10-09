import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { Landing } from "./App";
import Privacy from "./Privacy";

/**
 * 빌드 타임 프리렌더용 진입점. 브라우저에는 절대 로드되지 않고
 * scripts/prerender.mjs 의 SSR 번들에서만 실행된다.
 * 각 경로가 렌더러에게 넘길 HTML 조각과 head 교체를 선언한다.
 */
export interface PrerenderedPage {
	/** dist/client 안에 쓸 파일 경로. */
	file: string;
	title: string;
	description: string;
	html: string;
}

export function prerenderPages(): PrerenderedPage[] {
	return [
		{
			file: "index.html",
			title: "e-mun",
			description:
				"e-mun은 AI를 통해 사용자의 불편함을 감지하고, 줄이며, 사라지게 만드는 플랫폼입니다.",
			html: renderToString(
				<StrictMode>
					<Landing />
				</StrictMode>,
			),
		},
		{
			file: "privacy/index.html",
			title: "개인정보처리방침 — e-mun",
			description:
				"e-mun 및 하위 서비스의 개인정보 처리 방식을 안내하는 페이지입니다.",
			html: renderToString(
				<StrictMode>
					<Privacy />
				</StrictMode>,
			),
		},
	];
}
