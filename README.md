# landing

`e-mun.com` 랜딩 페이지와 개인정보처리방침. Cloudflare Worker로 뜬다.

| | |
|---|---|
| 스택 | React 19 + Vite + Hono |
| 배포 | Cloudflare Workers (Static Assets) |
| 도메인 | `e-mun.com`, `www.e-mun.com` |

**클러스터를 지나지 않는다.** 정적 사이트라 k8s도 Cloudflare Tunnel도 거치지 않는다. 클러스터가 죽어도 랜딩은 살아 있다.

## 페이지

| 경로 | 내용 |
|---|---|
| `/` | 랜딩 |
| `/privacy` | 개인정보처리방침 |

라우터를 쓰지 않는다. `wrangler.json`의 `not_found_handling: single-page-application` 때문에 모든 경로가 `index.html`로 오므로 `App.tsx`에서 `pathname`으로 가른다. 페이지가 늘어나면 그때 `react-router`를 붙인다.

## 구조

```
src/
├── react-app/
│   ├── index.css      디자인 토큰 (Primitive → Alias)
│   ├── App.tsx        경로 분기 + 랜딩
│   ├── App.css
│   ├── Privacy.tsx    개인정보처리방침
│   └── Privacy.css
└── worker/
    └── index.ts       Hono. /api/ 하나만 처리하고 나머지는 정적 자산으로 흐른다
```

## 로컬 개발

```bash
npm install
npm run dev          # http://localhost:5173
```

빌드와 타입 검사:

```bash
npm run check        # tsc + vite build + wrangler deploy --dry-run
```

## 배포

**먼저 Cloudflare 인증이 필요하다.** 인증 없이 `deploy`를 실행하면 이렇게 멈춘다.

```
✘ In a non-interactive environment, it's necessary to set a
  CLOUDFLARE_API_TOKEN environment variable for wrangler to work.
```

### 방법 A — OAuth 로그인 (권장)

`wrangler login`은 브라우저를 열고 입력을 기다리므로 **별도 터미널 창**에서 실행한다. 에이전트 세션 안에서는 안 된다.

```bash
npx wrangler login       # 브라우저 → 승인
npx wrangler whoami      # 계정 확인
npm run build && npm run deploy
```

한 번 로그인하면 `~/Library/Preferences/.wrangler/`에 저장된다.

### 방법 B — API 토큰

CI에서 쓸 거면 이쪽이다. My Profile → API Tokens → **Edit Cloudflare Workers** 템플릿으로 만든다.

커스텀 도메인을 붙이면서 DNS 레코드가 생성되므로 `e-mun.com` 영역에 **DNS: 편집** 권한을 추가해 둔다. 없으면 그 단계에서 막힌다.

```bash
export CLOUDFLARE_API_TOKEN=...
npm run build && npm run deploy
```

> 계정에 `계정.컨테이너` / `계정.Secrets Store` 권한만 가진 토큰이 있다면 그건 배포에 쓸 수 없다. 이름이 배포용처럼 보여도 **Workers Scripts: 편집**이 없으면 실패한다.

### 배포 후 확인

```bash
curl -sI https://e-mun.com | head -1          # 200
curl -sI https://www.e-mun.com | head -1      # 200
curl -s https://e-mun.com/privacy | grep -c 개인정보처리방침
```

## 도메인

커스텀 도메인을 대시보드가 아니라 `wrangler.json`에 둔다. 설정이 git에 남는다.

```json
"routes": [
  { "pattern": "e-mun.com", "custom_domain": true },
  { "pattern": "www.e-mun.com", "custom_domain": true }
]
```

**`routes`는 선언형이다.** 하나를 지우고 배포하면 그 커스텀 도메인이 정리된다. apex만 남기면 `www`가 끊긴다.

apex(`e-mun.com`)가 필요한 이유는 소셜 로그인 심사다. 네이버는 서비스 URL에 `www` 형식을 거부하고 apex를 요구한다.

## 디자인

색과 서체는 [`../common/designs/admin.md`](../common/designs/admin.md)의 토큰을 따른다. 레이아웃은 따르지 않는다 — 그 문서는 1920 기준 데스크톱 콘솔 스펙이라 랜딩에 맞지 않는다.

`index.css`가 **Primitive → Alias** 2단 구조다. `admin.md`와 같은 구조라 원시값(`--neutral-*`, `--blue-*`, `--logo-*`)만 교체하면 전체가 따라온다.

| 역할 | 토큰 |
|---|---|
| 배경 | `--color-bg` ← Neutral-1100 |
| 본문 | `--color-text-primary` ← Neutral-100 |
| 강조 | `--color-accent` ← logo-1 (오렌지) |
| 상호작용 | `--color-interactive` ← Secondary-2 (블루) |

컴포넌트에서 원시값을 직접 쓰지 않는다. Alias만 쓴다 — 그래야 브랜드 색이 바뀔 때 한 곳만 고친다.

## 개인정보처리방침에 채워야 할 것

`src/react-app/Privacy.tsx` 상단 `OPERATOR` 객체에 `TODO`가 모여 있다. **법정 기재 사항이라 공개 전에 채워야 한다.**

```
상호, 대표자명, 사업자등록번호, 사업장 주소,
개인정보 보호책임자 이름·직책, 시행일
```

본문 위탁 표의 **처리 위치** 두 곳(Cloudflare, Oracle Cloud)도 `TODO`다. 국외 이전에 해당하면 이전 항목·국가·시기·방법을 명시해야 하므로 실제 사용 리전을 확인해야 한다. 페이지에 주황 박스로 표시돼 있어 열면 바로 보인다.

수집 항목과 보관 기간은 auth-service 설계와 일치시켜 적었다 — 소셜 식별자, 제공 시 이메일, 닉네임, 프로필 이미지, 접속 기록 90일. 비밀번호와 행태정보는 수집하지 않는다. 설계가 바뀌면 이 문서도 같이 고쳐야 한다.

법률 검토를 받은 문서는 아니다.

## 남은 것

`App.tsx`의 `console.e-mun.com` 링크가 아직 없는 호스트를 가리킨다. 어드민 화면을 각 서비스 안(`<service>.e-mun.com/admin`)에 두기로 한 결정과 어긋나므로, 통합 콘솔로 갈지 정한 뒤에 손대야 한다.
