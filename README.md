# 프로젝트이름 
## 룰루랩 - 병원 예약 시스템 구축
  <br/>

## 프로젝트 설명
- 프로젝트 내용
    - 병원 예약시스템을 제작
    - 예약이 가능한 일자를 선택하여, 예약을 진행하고 노쇼 방지를 위한 설계구축

  <br/>
  <br/>

## 언어

- JavaScript
- React.js
- Vite
- Styled-component
  <br/>
  <br/>

## 라이브러리

- styled-components
- styled-reset
- date-fns
- react-datepicker
- react-icons
- swiper
  <br/>
  <br/>

# 프로젝트 설치 및 실행 방법

## ✅ 설치방법

1. Node.JS를 다운받아 설치해주세요. vite를 사용하였기 때문에 최소 14.18 버전 이상이 요구됩니다.

```
https://nodejs.org/
```

<br/>

2. 리포지토리를 클론해주세요.<br/>

```
git clone https://github.com/tmdcjf152/pre-onboarding-lululab.git
```

<br/>

3.dependencies를 설치해주세요.

```
npm install
```

<br/>
<br/>

## ✅ 실행방법

1. 다음 명령어를 이용해 Dev server를 실행시켜주세요.

```
npm run dev
```

<br/>

2. 브라우저에서 
[배포주소](https://tmdcjf152.github.io/pre-onboarding-lululab/#/)로 접속해주시면 됩니다.

   <br/>
   <br/>
   <br/>

# 저작권, 라이선스 정보

[저작권] Adobe
<br/>

- ✅ 프로젝트내 이미지는 모두  Adobe 에서 제공받았습니다.
  <br/>
  <br/>

<br/>

# 주요기능 및 설명

## ✅ 전체적인 UI 모습
<img src="https://user-images.githubusercontent.com/87900492/196642891-b7088413-1ea2-4684-81ee-67fab1c84fc7.gif" width="400" height="500"/>

```
병원예약시스템을 만들면서 웹으로 UI/UX를 구상해야할지 모바일 느낌으로 구상해야할지 고민을 하면서 
요즘은 웹으로 예약하기 보단 모바일을 더 선호한다는 생각으로 모바일에 맞는 UI로 제작하였습니다.
기본적으로 큰 화면또한 반응형을 지원하지만 기본사이즈는 아이패드미니(768px)부터 아이폰se(375px)에서 
앱을 이용하는것이 가장 이상적인 크기라고 볼수 있습니다.
```
<br/>
<br/>

## ✅ 반응형
<img src="https://user-images.githubusercontent.com/87900492/196654562-f6af087b-4b17-4633-9c58-ff4536a5b906.gif" width="400" height="500"/>

```
테블릿 및 모바일에 좀더 최적화된 화면이지만 웹에서 접근하더라도 이상없이 예약시스템을 이용할 수 있도록
반응형 작업을 하였습니다.
```

<br/>
<br/>

## ✅ 로그인 유무에 따른 예약 유효성검사
<img src="https://user-images.githubusercontent.com/87900492/196642885-45ce0c7a-2219-46cb-b3b3-76948f484cce.gif" width="400" height="500"/>

```
로그인 정보가 있으면 예약이 가능한 페이지로 이동시켜주고 
만약 로그인정보가 없다면 로그인페이지로 이동시켜주는 로직으로 구성하였습니다.
```
<br/>
<br/>

## ✅ 로그인 기능
<img src="https://user-images.githubusercontent.com/87900492/196642853-29530f5f-6dcb-41d7-b815-c0f903a50abe.gif" width="400" height="500"/>

```
input값으로 이름을 받으면 그 이름을 sectionStorage에 저장하고
그이름을 Token처럼 이용하여 로그인 기능을 구현하였습니다.

✅ 이름과 비밀번호는 임의로 작성해주시면 로그인이 가능합니다.
```
<br/>
<br/>

## ✅ 병원예약기능
<img src="https://user-images.githubusercontent.com/87900492/196642870-9e7a8502-128b-49e1-82eb-3cc64c520f43.gif" width="400" height="500"/>

```
예약하기 버튼을 클릭시 예약이 가능한 병원 리스트가 뜨며 예약하기 버튼을 클릭시 손쉽게 예약을 할 수 있습니다.
```

<br/>
<br/>

## ✅ 중복예약 방지기능
<img src="https://user-images.githubusercontent.com/87900492/196642893-ba4cff3c-cb72-4b98-a916-aeef0c395197.gif" width="400" height="500"/>

```
만약 현재 예약된 병원을 다시 예약하게 된다면 "이미 예약이 완료된 병원입니다" 라는 문구를 출력하고 홈으로 이동합니다.
```
<br/>
<br/>

## ✅ 예약취소 기능
<img src="https://user-images.githubusercontent.com/87900492/196642888-8d05a571-e63f-4cd1-9a54-e29b8dbbbc29.gif" width="400" height="500"/>

```
메인화면에 예약 취소하기 버튼을 클릭시 예약정보가 삭제되고 중복예약으로 예약이 불가능했던 병원도 예약이 가능해집니다.
```
<br/>
<br/>

## ✅ 노쇼고객 예약불가 기능
<img src="https://user-images.githubusercontent.com/87900492/196642863-94cbca66-9275-4a8a-9fc1-877bc9428350.gif" width="400" height="500"/>

```
병원에서 해당 고객을 블랙리스트 처리하는 시스템처럼 구현을 하였으며
목데이터 안에 블랙리스트 처리를 한것처럼 block: 을 true/false로 값을 저장해 주었습니다.

만약 block이 true인 병원을 예약하려고하면  예약을 할수 없다는 문구와 함께 예약을 할 수 없게됩니다.
```
<br/>
<br/>

## ✅ 로그아웃 기능

<img src="https://user-images.githubusercontent.com/87900492/196645582-5dbcd8d4-55d9-463c-b7e5-53bb1a0854c4.gif" width="400" height="500"/>

```
마이페이지에서 로그아웃 버튼을 클릭시 로그아웃이 되고 사용자 정보가 제거됩니다.
```
<br/>
<br/>

# ✅ 프로젝트를 진행하면서 고민한 점 과 하고싶은 말

### 아무래도 주어진 UI가 없기때문에 UI기획부터 진행해하면서 프로젝트를 진행하였지만

### 웹으로 구현할것인가 앱으로 구현할 것인가 에 대해 많이 고민을많이 고민을 한 것 같습니다.

### 결국에는 모든 모니터에서 사용이 가능하도록 반응형을 구현하였고

### 백엔드 없이 어떻게 구현 할 것인가 라는 고민을 많이 한것 같습니다.

### 사용자 정보를 받아오고 사용자가 예약한 병원의 정보도 받아와야 하는 시점에서 

### 프론트에서 어떻게 기능을 구현 할 수 있을까? 라는 고민을 많이했고

### 고민한 나머지 localStorage에 데이터값을 저장하고 그 값을 이용해서 로그인과 로그아웃 

### 예약시스템 중복예약방지 기능을 구현할 수있게 되었습니다.

### 만약 시간이 조금만 더 있었더라면 로그인 유효성 검사 및 UX에 맞게 고객이 실수로 예약 취소버튼을

### 누르더라도 팝업창으로 한번더 취소할것인지 2차확인을 하는 기능까지 구현하고 싶었습니다.

<br/>
<br/>

# 팀원소개

### ✅ 프론트엔드 최승철

- 깃허브 https://github.com/tmdcjf152
- 블로그 https://www.notion.so/STUDY-b0998ad1b1204a359dbf6833d4035fe0
