import { RootState } from './state';
import { NewsItem, CommonItem } from './../api/index';

// 뮤테이션 타입
enum MutationTypes {
  SET_NEWS = 'SET_NEWS',
  SET_ASK = 'SET_ASK',
  SET_JOBS = 'SET_JOBS',
}

// 뮤테이션 속성 함수
const mutations = {
  [MutationTypes.SET_NEWS](state: RootState, news: NewsItem[]) {
    state.news = news;
  },
  [MutationTypes.SET_ASK](state: RootState, ask: CommonItem[]) {
    state.ask = ask;
  },
  [MutationTypes.SET_JOBS](state: RootState, jobs: CommonItem[]) {
    state.jobs = jobs;
  },
};

type Mutations = typeof mutations;

export { MutationTypes, Mutations, mutations };

// export default {
//   SET_NEWS(state, news) {
//     state.news = news;
//   },
//   SET_ASK(state, ask) {
//     state.ask = ask;
//   },
//   SET_JOBS(state, jobs) {
//     state.jobs = jobs;
//   },
//   SET_USER(state, user) {
//     state.user = user;
//   },
//   SET_ITEM(state, item) {
//     state.item = item;
//   },
//   SET_LIST(state, list) {
//     state.list = list;
//   },
// };
