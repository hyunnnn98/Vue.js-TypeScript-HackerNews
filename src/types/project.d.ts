import Vue from 'vue';
import { MyStore } from '../store/types';

// NOTE: 'node_modules/vuex/types/vue.d.ts 파일을 삭제해줘야 아래 타입이 정상 추론됨
// VueX 인 경우 2 버젼은 아래와 같은 번거로운 과정을 정의해줘야하지만, 3 버젼은 인터페이스를 지원한다!!
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
