# e-mun Landing Page – Agent Guide

## 1. Purpose

e-mun 랜딩 페이지는 특정 기능이나 서비스의 설명을 목적으로 하지 않는다.  
이 페이지의 목적은 다음 한 문장으로 요약된다.

> **e-mun은 AI를 통해 사용자의 ‘불편함’을 감지하고, 줄이며, 사라지게 만드는 플랫폼이다.**

이 페이지는 “무엇을 제공하는가”보다  
“어떤 문제의식으로 존재하는가”를 전달해야 한다.

---

## 2. Core Philosophy

### 2.1 e-mun의 철학

- 사용자는 종종 **불편함을 명확히 표현하지 못한다**
- 많은 시스템은 **문제가 드러난 뒤에야 반응한다**
- e-mun은 그 이전을 목표로 한다

e-mun은 다음을 지향한다:

- 사용자의 행동, 맥락, 반복을 통해
- **불편함을 추론하고**
- **개선의 개입 지점을 제안하며**
- **사용자가 인식하기 전에 문제를 줄이는 것**

AI는 e-mun의 기능이 아니라 **태도**다.

---

### 2.2 AI에 대한 관점

이 페이지에서 AI는 다음처럼 표현되어야 한다:

- ❌ 기술 용어 나열
- ❌ 모델명, 알고리즘 설명
- ❌ 과장된 미래 담론

대신:

- ⭕ “조용히 돕는 존재”
- ⭕ “배경에서 맥락을 이해하는 존재”
- ⭕ “사용자를 방해하지 않는 개선”

AI는 전면에 나오지 않는다.  
**결과만 남는다.**

---

## 3. Tone & Voice

### 3.1 전체 톤

- 차분함
- 절제됨
- 자신감 있지만 과시하지 않음
- 기술적이되 인간 중심적

### 3.2 피해야 할 표현

- “혁신적인”
- “차세대”
- “세계 최초”
- “AI 기반 솔루션”

### 3.3 권장되는 표현

- “더 단순하게”
- “불필요한 것을 줄이다”
- “자연스럽게 개선하다”
- “의식하지 않아도 작동하는”

---

## 4. Animation System

### 4.1 Hero 진입 애니메이션

CSS 애니메이션 기반, 페이지 로드 시 자동 실행:

| 애니메이션 | 속성 | 용도 |
|------------|------|------|
| `fade-in` | opacity 0→1, 1s ease-out | 메인 헤드라인 |
| `fade-in-delay-1` | fadeIn + 0.2s delay | 서브타이틀 |
| `fade-in-delay-2` | fadeIn + 0.4s delay | 스크롤 인디케이터 |
| `pulse-slow` | 4s pulse | 배경 orb 효과 |

### 4.2 스크롤 기반 Reveal 애니메이션

IntersectionObserver 기반, 뷰포트 진입 시 트리거:

```
.reveal {
  opacity: 0 → 1
  translateY: 40px → 0
  duration: 0.8s ease-out
}
```

**Observer 설정:**
- threshold: 0.1
- rootMargin: '0px 0px -50px 0px'

**Delay 클래스:**
- `.reveal-delay-1` ~ `.reveal-delay-4`: 0.1s ~ 0.4s

### 4.3 인터랙션 효과

| 효과 | 구현 | 용도 |
|------|------|------|
| `.glass` | backdrop-blur-xl, bg-white/5, border-white/10 | 카드 배경 |
| `.glow` | box-shadow accent 60px | 강조 요소 |
| `.glow-sm` | box-shadow accent 30px | 호버 상태 |
| hover transition | bg-white/[0.08], 500ms | 카드 호버 |

### 4.4 텍스트 그라데이션

| 클래스 | 스타일 |
|--------|--------|
| `.text-gradient` | white → neutral-200 → neutral-400 |
| `.text-gradient-accent` | accent-300 → accent-500 |

---

## 5. Visual & Layout Direction

### 5.1 디자인 원칙

- 여백이 많은 레이아웃
- 정보 밀도 낮음
- 시선의 흐름이 자연스러움
- 애니메이션은 최소, 존재감은 분명

### 5.2 Tailwind 사용 가이드

- 유틸리티 클래스 기반
- 커스텀 CSS 최소화
- 디자인 토큰은 Tailwind config로 관리
- 컴포넌트는 재사용 가능하게 구성

### 5.3 컬러 & 무드

- 차분한 단색 계열
- 과한 그라데이션 ❌
- 대비는 명확하되 공격적이지 않게

---

## 6. Content Structure (Suggested)

### Section 1 — Hero

**의도**  
“이 서비스는 뭔가 다르다”는 첫 인상

**특징**
- 한 문장
- 강한 여백
- 시각적 소음 없음

---

### Section 2 — Why

**의도**  
문제를 정의하되, 특정 서비스는 언급하지 않음

**핵심 메시지**
- 불편함은 사소한 곳에서 시작된다
- 대부분은 시스템이 아니라 사람의 몫으로 남겨진다

---

### Section 3 — How e-mun Thinks

**의도**  
e-mun의 사고방식 소개

**포인트**
- 반응이 아닌 선제
- 기능이 아닌 맥락
- 자동화가 아닌 개선

---

### Section 4 — Future Placeholder

**의도**  
확장 가능성 암시

**규칙**
- 서비스 이름 ❌
- 기능 목록 ❌
- “곧 공개됩니다” 같은 문구 ❌

대신:
- “e-mun은 여러 형태로 확장될 수 있다”
- “이 철학은 하나의 서비스로 끝나지 않는다”

---

### Section 5 — Entry Points

**의도**  
다음 행동 제시 (강요하지 않음)

- 로그인 (auth.e-mun.com)
- 콘솔 (console.e-mun.com)

CTA는 작고, 조용하며, 페이지 하단에 위치한다.

---

## 7. Interaction Rules

- 랜딩 페이지 자체는 **로그인 불필요**
- 사용자 상태에 따라 UI가 바뀌지 않음
- 쿠키, 로컬스토리지 의존 ❌
- 팝업, 강제 이동 ❌

---

## 8. Non-Goals

이 랜딩 페이지는 다음을 하지 않는다:

- 세일즈 페이지 역할
- 기능 비교
- 경쟁사 언급
- 기술 문서 역할
- 제품 상세 설명

---

## 9. Internal Guiding Sentence

> **e-mun 랜딩 페이지는  
> ‘설명하는 페이지’가 아니라  
> ‘방향을 느끼게 하는 페이지’다.**