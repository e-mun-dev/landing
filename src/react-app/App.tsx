import { Fragment, useEffect, useRef, useState } from "react";
import Privacy from "./Privacy";
import "./App.css";

const PRODUCTS = [
	{ label: "LANDING", href: "/" },
	{ label: "QUIZ", href: "https://quiz.e-mun.com" },
];

/** marquee 가 -50% 로 도니 목록을 두 벌 깔아야 이어진다. 한 벌이 화면보다
    넓어야 빈 구간이 안 생겨서 12 번 반복한다. */
const TICKER = Array.from({ length: 12 }, () => PRODUCTS).flat();

function Landing() {
	const rootRef = useRef<HTMLDivElement>(null);
	const [electric, setElectric] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("is-visible");
					}
				});
			},
			{ threshold: 0.12 }
		);

		rootRef.current
			?.querySelectorAll(".reveal")
			.forEach((el) => observer.observe(el));

		return () => observer.disconnect();
	}, []);

	return (
		<div
			className={electric ? "landing is-electric" : "landing"}
			ref={rootRef}
		>
			<div className="page">
				<header className="landing-header">
					<a href="#top" className="brand" aria-label="e-mun home">
						<span className="brand-mark">e</span>e-mun
					</a>
					<nav className="landing-nav" aria-label="main navigation">
						<a href="#works">what we make</a>
						<a href="#thinking">how we think</a>
						<a href="#process">process</a>
					</nav>
					<div className="nav-right">
						<button
							className="mood-button"
							aria-label="컬러 무드 바꾸기"
							onClick={() => setElectric((v) => !v)}
						>
							✦
						</button>
						<a href="#contact" className="talk-button">
							let&rsquo;s talk <span>↗</span>
						</a>
					</div>
				</header>

				<main id="top">
					<section className="hero reveal is-visible">
						<div className="hero-copy">
							<span className="eyebrow">a small studio for big ideas</span>
							<h1>
								재미있는 생각을
								<br />
								<em>진짜 경험</em>으로.
							</h1>
							<p className="hero-lede">
								e-mun은 사람들이 한 번 더 눌러보고, 한 번 더 웃고, 조금 더
								오래 기억하는 디지털 경험을 만듭니다.
							</p>
							<div className="hero-note">
								<span className="pill">
									<i />
									curious by default
								</span>
								<span>
									<b>새로운 걸</b> 좋아합니다.
								</span>
							</div>
						</div>
						<div
							className="hero-art"
							aria-label="e-mun의 창의적인 작업을 상징하는 그래픽"
						>
							<div className="art-sun" />
							<div className="art-eye" />
							<div className="art-star">✦</div>
							<div className="art-bubble">
								어, 이거 재밌는데?
								<small>우리가 가장 좋아하는 반응</small>
							</div>
							<div className="art-ticket">
								<strong>
									MAKE
									<br />
									IT PLAYFUL
								</strong>
								<span>e-mun / 001</span>
							</div>
							<span className="art-caption">IDEAS IN MOTION — 2026</span>
						</div>
					</section>

					<div className="ticker">
						<div className="ticker-track">
							{[...TICKER, ...TICKER].map((product, i) => (
								<Fragment key={i}>
									<a href={product.href}>{product.label}</a>
									<i />
								</Fragment>
							))}
						</div>
					</div>

					<section className="content-section reveal" id="thinking">
						<div className="section-head">
							<div>
								<span className="eyebrow">not a typical company intro</span>
								<h2>
									우리는 문제보다
									<br />
									<em>가능성</em>이 재밌습니다.
								</h2>
							</div>
							<p>
								정답을 찾기 전에, 더 좋은 질문을 만들어봅니다. 쓸모와 재미
								사이의 이상한 지점을 오래 관찰합니다.
							</p>
						</div>
						<div className="manifesto">
							<div className="manifesto-label">
								<span className="eyebrow">our point of view</span>
								<span className="manifesto-tag">serious about fun</span>
							</div>
							<div>
								<blockquote>
									평범한 하루에
									<br />
									<em>한 끗</em>을 더하는 일.
								</blockquote>
								<p className="manifesto-copy">
									기술은 뒤에 있어도 괜찮습니다. 앞에 남아야 하는 건 경험,
									표정, 그리고 &ldquo;이거 뭐지?&rdquo; 하고 멈춰 보는
									순간이라고 믿으니까요.
								</p>
							</div>
						</div>
					</section>

					<section className="content-section reveal" id="works">
						<div className="section-head">
							<div>
								<span className="eyebrow">things we make</span>
								<h2>
									작은 호기심을
									<br />큰 반응으로.
								</h2>
							</div>
							<p>
								테스트부터 콘텐츠, 브랜드를 위한 디지털 도구까지. 사람과 화면
								사이에 새로운 리듬을 만듭니다.
							</p>
						</div>
						<div className="works">
							<div className="work-card">
								<div className="work-top">
									<span className="work-type">01 / interactive</span>
									<span className="work-index">✦</span>
								</div>
								<h3>
									나를 알아가는
									<br />
									가장 재밌는 방법.
								</h3>
								<p>퀴즈와 테스트, 결과를 기다리는 짧은 설렘까지.</p>
								<div className="work-orbit" />
								<span className="work-emoji">☻</span>
							</div>
							<div className="work-card">
								<div className="work-top">
									<span className="work-type">02 / content</span>
									<span className="work-index">✦</span>
								</div>
								<h3>
									읽고 나면
									<br />
									생각나는 것.
								</h3>
								<p>가볍게 들어와서, 은근히 오래 남는 콘텐츠.</p>
								<span className="work-emoji">✳</span>
							</div>
							<div className="work-card">
								<div className="work-top">
									<span className="work-type">03 / tools</span>
									<span className="work-index">✦</span>
								</div>
								<h3>
									복잡한 일을
									<br />
									조금 더 재밌게.
								</h3>
								<p>작은 팀을 위한 시스템과 자동화.</p>
								<span className="work-emoji">↗</span>
							</div>
							<div className="work-card">
								<div className="work-top">
									<span className="work-type">04 / next things</span>
									<span className="work-index">✦</span>
								</div>
								<h3>
									아직 이름 없는
									<br />
									다음 장면.
								</h3>
								<p>새로운 포맷, 새로운 질문, 새로운 인터넷.</p>
								<span className="work-emoji">?</span>
							</div>
						</div>
					</section>

					<section className="content-section reveal">
						<div className="section-head">
							<div>
								<span className="eyebrow">what we are good at</span>
								<h2>
									기능보다
									<br />
									맥락을 만듭니다.
								</h2>
							</div>
							<p>
								가장 멋진 결과물은 사용자가 설명하지 않아도 &ldquo;아, 이거
								나를 위한 거네&rdquo; 하고 느끼는 것.
							</p>
						</div>
						<div className="capability-grid">
							<article className="capability">
								<span className="capability-number">01</span>
								<h3>질문 만들기</h3>
								<p>
									사람이 멈춰서 생각하게 되는 질문. 너무 무겁지 않고, 너무
									뻔하지 않게.
								</p>
							</article>
							<article className="capability">
								<span className="capability-number">02</span>
								<h3>경험 설계하기</h3>
								<p>
									클릭 하나, 문장 하나, 기다리는 2초까지. 흐름 전체를 하나의
									장면처럼 설계합니다.
								</p>
							</article>
							<article className="capability">
								<span className="capability-number">03</span>
								<h3>계속 좋아지기</h3>
								<p>
									만들고 끝내지 않습니다. 사람들이 남긴 반응을 보고 다음
									버전을 상상합니다.
								</p>
							</article>
						</div>
					</section>

					<section className="content-section reveal" id="process">
						<div className="section-head">
							<div>
								<span className="eyebrow">our way of working</span>
								<h2>
									관찰하고,
									<br />
									상상하고, 만듭니다.
								</h2>
							</div>
							<p>
								완벽한 계획보다 빠른 실험을 믿습니다. 대신 배운 건 꼼꼼하게
								다음 장면에 반영합니다.
							</p>
						</div>
						<div className="process">
							<article className="process-item">
								<strong>01</strong>
								<h3>LOOK</h3>
								<p>불편함과 반짝임을 관찰합니다.</p>
							</article>
							<article className="process-item">
								<strong>02</strong>
								<h3>WONDER</h3>
								<p>&ldquo;만약에?&rdquo;를 마음껏 던집니다.</p>
							</article>
							<article className="process-item">
								<strong>03</strong>
								<h3>MAKE</h3>
								<p>작게 만들고 바로 보여줍니다.</p>
							</article>
							<article className="process-item">
								<strong>04</strong>
								<h3>REPEAT</h3>
								<p>반응을 보고 더 좋아지게 합니다.</p>
							</article>
						</div>
					</section>

					<section className="contact reveal" id="contact">
						<span className="eyebrow">have something in mind?</span>
						<h2>
							재밌는 일,
							<br />
							같이 만들까요?
						</h2>
						<p>
							아직 정리되지 않은 아이디어도 괜찮습니다. 재미있는 생각은 대체로
							처음부터 말끔하지 않으니까요.
						</p>
						<a className="primary-action" href="mailto:support@e-mun.com">
							아이디어를 들려주세요 <span>↗</span>
						</a>
						<div className="contact-shape" aria-hidden="true" />
					</section>
				</main>

				<footer className="landing-footer">
					<div>
						<strong>e-mun</strong>
						<br />
						<span>small studio, curious minds.</span>
					</div>
					<nav className="landing-nav">
						<a href="#works">what we make</a>
						<a href="#thinking">how we think</a>
						<a href="#contact">contact</a>
						<a href="/privacy">개인정보처리방침</a>
					</nav>
					<span>© e-mun 2026</span>
				</footer>
			</div>
		</div>
	);
}

/**
 * 경로 분기. wrangler.json 의 not_found_handling 이 single-page-application 이라
 * 모든 경로가 index.html 로 오므로 여기서 가른다. 라우터를 넣지 않는다 —
 * 페이지가 둘뿐이고, 늘어나면 그때 react-router 를 붙인다.
 */
function App() {
	if (window.location.pathname.replace(/\/+$/, "") === "/privacy") {
		return <Privacy />;
	}
	return <Landing />;
}

export default App;
