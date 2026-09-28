import "./Privacy.css";

/**
 * 채워야 하는 값. 여기만 고치면 본문 전체에 반영된다.
 * TODO 가 남아 있으면 공개 전에 채운다 — 법정 기재 사항이다.
 */
const OPERATOR = {
	name: "e-mun",
	ceo: "신강식",
	businessNumber: "237-19-02733",
	address: "TODO: 사업장 주소",
	email: "support@e-mun.com",
	officer: "손예선",
	officerRole: "TODO: 직책",
	effectiveDate: "TODO: 시행일 (예: 2026년 10월 1일)",
};

function Privacy() {
	return (
		<div className="doc">
			<header className="doc-header">
				<a href="/" className="doc-back">
					← e-mun
				</a>
				<h1 className="doc-title">개인정보처리방침</h1>
				<p className="doc-meta">시행일 {OPERATOR.effectiveDate}</p>
			</header>

			<main className="doc-body">
				<p className="doc-lead">
					{OPERATOR.name}(이하 &ldquo;운영자&rdquo;)은 e-mun 및 그 하위 서비스를 제공하면서
					이용자의 개인정보를 아래와 같이 처리합니다. 운영자는 비밀번호를 수집하지 않으며,
					로그인은 외부 소셜 로그인 제공자를 통해서만 이루어집니다.
				</p>

				<section className="doc-section">
					<h2>1. 수집하는 개인정보 항목과 수집 방법</h2>

					<h3>가. 소셜 로그인 시</h3>
					<p>
						이용자가 소셜 로그인으로 가입·로그인할 때 해당 제공자로부터 다음 정보를
						전달받습니다.
					</p>
					<table className="doc-table">
						<thead>
							<tr>
								<th>항목</th>
								<th>필수 여부</th>
								<th>비고</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>제공자 회원 식별자</td>
								<td>필수</td>
								<td>계정을 구분하는 유일한 값</td>
							</tr>
							<tr>
								<td>이메일 주소</td>
								<td>선택</td>
								<td>제공자가 전달하는 경우에만 저장. 없이도 이용 가능</td>
							</tr>
							<tr>
								<td>닉네임(별명)</td>
								<td>선택</td>
								<td>화면 표시용</td>
							</tr>
							<tr>
								<td>프로필 이미지 주소</td>
								<td>선택</td>
								<td>화면 표시용</td>
							</tr>
						</tbody>
					</table>
					<p>
						실명, 연락처, 생년월일, 성별은 수집하지 않습니다. 비밀번호는 제공자가
						관리하며 운영자에게 전달되지 않습니다.
					</p>

					<h3>나. 서비스 이용 과정에서 자동으로 생성되는 정보</h3>
					<table className="doc-table">
						<thead>
							<tr>
								<th>항목</th>
								<th>목적</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>접속 IP 주소</td>
								<td>부정 이용 확인, 로그인 이력 기록</td>
							</tr>
							<tr>
								<td>브라우저·기기 정보(User-Agent)</td>
								<td>로그인한 기기 구분, 기기별 로그아웃</td>
							</tr>
							<tr>
								<td>기기 식별자</td>
								<td>세션 관리</td>
							</tr>
							<tr>
								<td>로그인·토큰 갱신 시각</td>
								<td>이상 접근 확인</td>
							</tr>
						</tbody>
					</table>

					<h3>다. 수집하지 않는 것</h3>
					<p>
						광고 식별자와 행태정보를 수집하지 않으며, 광고를 게재하지 않습니다.
						분석·추적을 위한 제3자 스크립트를 넣지 않습니다.
					</p>
				</section>

				<section className="doc-section">
					<h2>2. 처리 목적</h2>
					<ul>
						<li>회원 식별과 로그인 유지</li>
						<li>여러 서비스에 대한 통합 로그인 제공</li>
						<li>부정 이용과 계정 탈취 확인, 그에 따른 접근 차단</li>
						<li>문의 대응</li>
					</ul>
					<p>위 목적 외로 이용하지 않으며, 목적이 바뀌면 별도로 동의를 받습니다.</p>
				</section>

				<section className="doc-section">
					<h2>3. 보유 및 이용 기간</h2>
					<table className="doc-table">
						<thead>
							<tr>
								<th>구분</th>
								<th>기간</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>계정 정보(식별자, 이메일, 닉네임, 프로필 이미지)</td>
								<td>탈퇴 시까지</td>
							</tr>
							<tr>
								<td>접속 IP·기기 정보 등 접속 기록</td>
								<td>수집일부터 90일</td>
							</tr>
							<tr>
								<td>로그인 유지용 토큰</td>
								<td>최대 30일. 로그아웃 시 즉시 폐기</td>
							</tr>
						</tbody>
					</table>
					<p>
						관계 법령이 별도 보관을 요구하는 경우 그 기간 동안 해당 정보만 분리하여
						보관합니다.
					</p>
				</section>

				<section className="doc-section">
					<h2>4. 제3자 제공</h2>
					<p>
						개인정보를 제3자에게 제공하지 않습니다. 법령에 따라 수사기관이 적법한 절차로
						요구하는 경우에만 예외로 합니다.
					</p>
				</section>

				<section className="doc-section">
					<h2>5. 처리 위탁</h2>
					<p>서비스 운영을 위해 아래 업무를 위탁하고 있습니다.</p>
					<table className="doc-table">
						<thead>
							<tr>
								<th>수탁자</th>
								<th>위탁 업무</th>
								<th>처리 위치</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Cloudflare, Inc.</td>
								<td>네트워크 전송, 접근 보호</td>
								<td>TODO: 확인 후 기재</td>
							</tr>
							<tr>
								<td>Oracle Corporation</td>
								<td>서버 호스팅, 데이터 보관</td>
								<td>대한민국 (춘천 리전)</td>
							</tr>
						</tbody>
					</table>
					<p className="doc-note">
						국외 이전에 해당하는 경우 이전되는 항목, 국가, 시기와 방법, 수탁자, 보유
						기간을 이 항목에 명시해야 합니다. 실제 사용 리전을 확인해 채워야 합니다.
					</p>
					<p>
						소셜 로그인 제공자(Google, Kakao, Naver 등)는 수탁자가 아니며, 이용자가
						직접 동의한 범위에서 정보를 전달합니다. 각 제공자의 개인정보 처리는 해당
						제공자의 방침을 따릅니다.
					</p>
				</section>

				<section className="doc-section">
					<h2>6. 이용자의 권리와 행사 방법</h2>
					<p>
						이용자는 언제든지 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지를 요구할
						수 있습니다. <a href={`mailto:${OPERATOR.email}`}>{OPERATOR.email}</a>로
						요청하시면 확인 후 지체 없이 처리합니다.
					</p>
					<p>
						연결한 소셜 계정은 서비스 내 설정에서 해제할 수 있습니다. 다만 마지막으로
						남은 하나는 해제할 수 없습니다 — 해제하면 로그인 수단이 없어집니다.
					</p>
				</section>

				<section className="doc-section">
					<h2>7. 파기 절차와 방법</h2>
					<p>
						보유 기간이 지나거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다.
						전자적 파일은 복구할 수 없는 방법으로 삭제하고, 출력물이 있는 경우 파쇄하거나
						소각합니다.
					</p>
					<p>
						탈퇴 시 계정 정보를 즉시 이용할 수 없도록 처리하고, 각 서비스에 남은 데이터는
						삭제하거나 개인을 알아볼 수 없도록 처리합니다.
					</p>
				</section>

				<section className="doc-section">
					<h2>8. 안전성 확보 조치</h2>
					<ul>
						<li>비밀번호를 수집하지 않습니다. 저장하지 않으므로 유출될 수 없습니다.</li>
						<li>
							로그인 유지용 토큰은 원본을 저장하지 않고 복원할 수 없는 형태로만
							보관합니다.
						</li>
						<li>
							토큰이 재사용되면 탈취로 판단해 해당 계정의 모든 로그인을 즉시 끊습니다.
						</li>
						<li>전송 구간은 전부 암호화합니다.</li>
						<li>개인정보에 접근할 수 있는 인원을 최소한으로 제한합니다.</li>
						<li>로그인·접근 이력을 기록해 이상 접근을 확인합니다.</li>
					</ul>
				</section>

				<section className="doc-section">
					<h2>9. 만 14세 미만 아동</h2>
					<p>
						만 14세 미만 아동의 개인정보를 수집할 목적으로 서비스를 운영하지 않습니다.
						만 14세 미만 아동의 정보가 법정대리인의 동의 없이 수집된 사실을 알게 되거나
						보호자가 요청하는 경우 지체 없이 삭제합니다.
					</p>
				</section>

				<section className="doc-section">
					<h2>10. 개인정보 보호책임자</h2>
					<table className="doc-table">
						<tbody>
							<tr>
								<th>책임자</th>
								<td>
									{OPERATOR.officer} ({OPERATOR.officerRole})
								</td>
							</tr>
							<tr>
								<th>문의</th>
								<td>
									<a href={`mailto:${OPERATOR.email}`}>{OPERATOR.email}</a>
								</td>
							</tr>
						</tbody>
					</table>
					<p>
						개인정보 침해로 인한 상담·신고는 개인정보침해신고센터(privacy.kisa.or.kr,
						118), 개인정보보호위원회(pipc.go.kr), 대검찰청 사이버수사과, 경찰청
						사이버수사국에 문의할 수 있습니다.
					</p>
				</section>

				<section className="doc-section">
					<h2>11. 방침의 변경</h2>
					<p>
						이 방침을 변경하는 경우 변경 사항과 시행일을 서비스 화면에 공지합니다.
						이용자에게 불리한 변경은 시행일 30일 전에 공지합니다.
					</p>
				</section>

				<section className="doc-section">
					<h2>운영자 정보</h2>
					<table className="doc-table">
						<tbody>
							<tr>
								<th>상호</th>
								<td>{OPERATOR.name}</td>
							</tr>
							<tr>
								<th>대표자</th>
								<td>{OPERATOR.ceo}</td>
							</tr>
							<tr>
								<th>사업자등록번호</th>
								<td>{OPERATOR.businessNumber}</td>
							</tr>
							<tr>
								<th>주소</th>
								<td>{OPERATOR.address}</td>
							</tr>
							<tr>
								<th>이메일</th>
								<td>
									<a href={`mailto:${OPERATOR.email}`}>{OPERATOR.email}</a>
								</td>
							</tr>
						</tbody>
					</table>
				</section>
			</main>

			<footer className="doc-footer">
				<a href="/">e-mun</a>
				<span>&copy; e-mun</span>
			</footer>
		</div>
	);
}

export default Privacy;
