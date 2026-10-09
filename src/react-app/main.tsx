import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

/**
 * createRoot 가 아니라 hydrateRoot. 정적 HTML 은 빌드 시 프리렌더되고
 * (scripts/prerender.mjs) 여기서 그 DOM 에 이벤트만 얹는다.
 * AdSense 크롤러는 JS 를 실행하지 않으므로 본문은 HTML 자체에 존재해야 한다.
 */
hydrateRoot(
	document.getElementById("root")!,
	<StrictMode>
		<App />
	</StrictMode>,
);
