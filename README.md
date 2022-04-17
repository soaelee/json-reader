# JSON-Reader

> 사용자의 JSON 파일을 계층구조로 렌더링하여 보여주고, 검색 기능을 제공합니다.

> [공개 레포지토리] (https://github.com/soaelee/json-reader/)

## 기술 스택과 라이브러리

1. React, Redux-toolkit
2. Typescript
3. SCSS
4. Styled-Components

## 기능

> input 태그를 이용해 사용자가 json 파일 첨부

## 프로젝트 설치 및 시작

1. 프로젝트 다운로드

> Git Clone

> > repository 우측 상단의 녹색 버튼을 클릭한 후에 'Clone with HTTPS'의 주소를 복사
> > 원하는 위치의 터미널에 `git@github.com:` 명령어를 입력해 프로젝트를 다운로드

> 프로젝트 압축 파일

> > repository 우측 상단의 녹색 버튼을 클릭한 후에 'Download Zip' 버튼을 눌러 프로젝트를 다운로드
> > 원하는 곳에 압축 해제

2. 터미널에서 `npm install` 명령어를 입력해 필요한 패키지를 설치
3. 터미널에서 `npm start` 명령어를 입력해 프로젝트를 실행
4. 프로젝트가 실행되면 [http://localhost:3000](http://localhost:3000) 페이지로 이동

### 사용 방법

1. 하단의 Upload Json File 버튼을 클릭하여 렌더링 할 json 파일을 첨부합니다.
2. json 파일이 렌더링 되면 각각의 타이틀을 눌러서 값을 확인 할 수 있습니다.
3. 새로운 파일을 올리고 싶으면 하단의 Reupload Json File을 클릭하여 새로 첨부할 수 있습니다.
4. Reset 버튼을 누를 경우, 첨부한 json 파일을 삭제하게 됩니다.
