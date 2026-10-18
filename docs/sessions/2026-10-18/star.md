# STAR 랜딩 반영

- 요청: 제품 배너에 STAR 링크를 추가하고 AdSense 관련 안내에도 STAR 포함.
- 기존 PRODUCTS 목록에 STAR를 추가해 티커와 프리렌더 HTML에 함께 반영.
- 개인정보처리방침 적용 범위에 STAR를 명시하고, 기존 광고 미게재 문구를 현재 AdSense 스크립트 설정에 맞춰 쿠키 및 맞춤형 광고 해제 안내로 교체.
- STAR의 별도 수집 항목은 확인되지 않아 추가하지 않음. 공통 계정 정책은 유지.
- 검증: `npm run lint`, `npm run build`, 프리렌더 HTML 링크 확인 통과. lint는 기존 생성 파일 경고 2개.
- auto-review: Codex working-tree 리뷰 성공, 지적 없음.
- 미검증: 브라우저 UI, 실제 광고 노출, 배포 환경. 배포 수행 안 함.
