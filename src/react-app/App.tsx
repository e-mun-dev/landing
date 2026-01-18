import { useEffect, useRef } from "react";
import "./App.css";

function App() {
	const revealRefs = useRef<HTMLElement[]>([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("visible");
					}
				});
			},
			{
				threshold: 0.1,
				rootMargin: "0px 0px -50px 0px",
			}
		);

		revealRefs.current.forEach((el) => {
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, []);

	const addRevealRef = (el: HTMLElement | null) => {
		if (el && !revealRefs.current.includes(el)) {
			revealRefs.current.push(el);
		}
	};

	return (
		<div className="landing">
			{/* Section 1: Hero */}
			<section className="section hero">
				<div className="hero-bg">
					<div className="hero-orb hero-orb-1" />
					<div className="hero-orb hero-orb-2" />
				</div>
				<div className="hero-content">
					<h1 className="hero-headline text-gradient">
						불편함이 사라지는 순간
					</h1>
					<p className="hero-subline">
						e-mun은 문제가 드러나기 전에 움직입니다
					</p>
				</div>
				<div className="scroll-indicator">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={1.5}
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</section>

			{/* Section 2: Why */}
			<section className="section content-section">
				<div className="section-content" ref={addRevealRef}>
					<div className="reveal">
						<span className="section-label">Why</span>
						<h2 className="section-title">
							불편함은 사소한 곳에서 시작됩니다
						</h2>
						<p className="section-desc">
							대부분의 시스템은 문제가 드러난 뒤에야 반응합니다.
							<br />
							그 사이, 작은 불편함은 사용자의 몫으로 남겨집니다.
							<br />
							<br />
							우리는 그 이전을 목표로 합니다.
						</p>
					</div>
				</div>
			</section>

			{/* Section 3: How e-mun Thinks */}
			<section className="section content-section">
				<div className="section-content">
					<div className="reveal" ref={addRevealRef}>
						<span className="section-label">How</span>
						<h2 className="section-title">
							e-mun은 이렇게 생각합니다
						</h2>
					</div>
					<div className="cards">
						<div
							className="card reveal reveal-delay-1"
							ref={addRevealRef}
						>
							<h3 className="card-title">반응이 아닌 선제</h3>
							<p className="card-desc">
								문제가 발생하기 전에 맥락을 파악하고, 개선의
								지점을 먼저 찾습니다.
							</p>
						</div>
						<div
							className="card reveal reveal-delay-2"
							ref={addRevealRef}
						>
							<h3 className="card-title">기능이 아닌 맥락</h3>
							<p className="card-desc">
								단순한 기능 제공이 아니라, 사용자의 상황과
								흐름을 이해하려 합니다.
							</p>
						</div>
						<div
							className="card reveal reveal-delay-3"
							ref={addRevealRef}
						>
							<h3 className="card-title">자동화가 아닌 개선</h3>
							<p className="card-desc">
								반복을 줄이는 것이 아니라, 더 나은 방향으로
								자연스럽게 이끕니다.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Section 4: Future */}
			<section className="section content-section">
				<div className="section-content" ref={addRevealRef}>
					<div className="reveal">
						<span className="section-label">Future</span>
						<h2 className="section-title">
							이 철학은 하나의 형태로 끝나지 않습니다
						</h2>
						<p className="section-desc">
							e-mun은 다양한 방식으로 확장될 수 있습니다.
							<br />
							불편함을 줄이는 방법은 언제나 여러 가지이기
							때문입니다.
						</p>
					</div>
				</div>
			</section>

			{/* Section 5: Entry Points */}
			<section className="section content-section">
				<div className="section-content" ref={addRevealRef}>
					<div
						className="reveal"
						style={{ textAlign: "center" }}
					>
						<h2 className="section-title">시작하기</h2>
						<div className="entry-points">
							<a
								href="https://auth.e-mun.com"
								className="entry-link"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.5}
										d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
									/>
								</svg>
								로그인
							</a>
							<a
								href="https://console.e-mun.com"
								className="entry-link"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1.5}
										d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
									/>
								</svg>
								콘솔
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="footer">
				<p>&copy; e-mun</p>
			</footer>
		</div>
	);
}

export default App;
