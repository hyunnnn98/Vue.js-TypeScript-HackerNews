import Vue from 'vue';
import { MyStore } from '../store/types';

// NOTE: 'node_modules/vuex/types/vue.d.ts 파일을 삭제해줘야 아래 타입이 정상 추론됨

// TIP !!
// Vue 2에서는 node_modules 밑의 타입 선언 파일을 지워줘야 하지만,
// Vue 3에서는 내부 라이브러리를 건들지 않고도 확장할 수 있게 다음과 같은 인터페이스가 제공됩니다
// 😃 Vuex 4 릴리즈 노트 : https://github.com/vuejs/vuex/releases/tag/v4.0.0-beta.1

declare module 'vue/types/vue' {
  interface Vue {
    $store: MyStore;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    store?: MyStore;
  }
}
