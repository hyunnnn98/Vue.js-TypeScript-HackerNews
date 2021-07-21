# vue-news

## 뷰 프로젝트에 타입스크립트를 점진적으로 적용하는 방법
1. Vue + Typescript 프로젝트 생성 
2. 기존 서비스 코드와 라이브러리를 새 프로젝트에 이동 
3. 기본적인 빌드 에러 해결 
4. 타입스크립트의 혜택을 볼 수 있는 주요 파일들 위주로 `.js` -> `.ts`로 변환하며 적용
> 🤔팁 : 타입 체킹 정도는 덜 엄격한 방식에서 점점 엄격한 방식으로 적용하는 것을 추천
>  `tsconfig.json` 의 `strict` 레벨을 조절하는 방식으로!!

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
