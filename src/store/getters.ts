// getters 는 computed 속성과 1 : 1 매칭이 된다.
// 컴포넌트에서 computed 속성으로 쓸 것들을 store 에서 getters 로 꺼내쓰면 된다!!

import { RootState } from './state';
import { NewsItem } from '@/api';

// 하지만, VueX 향후 로드맵에서는 헬퍼함수가 없어지는 추세이기 때문에 getters는 필요없을듯...

const getters = {
  fetchedNews(state: RootState): NewsItem[] {
    return state.news;
  },
};

type Getters = typeof getters;

export { getters, Getters };

// export default {
//   fetchedItem(state) {
//     return state.item;
//   },
//   fetchedUser(state) {
//     return state.user;
//   },
//   fetchedList(state) {
//     return state.list;
//   },
//   // ItemView
//   userName(state) {
//     return state.item.user;
//   },
//   userContent(state) {
//     return state.item.content;
//   },
//   userQuestion(state) {
//     return state.item.title;
//   },
//   userTimeAgo(state) {
//     return state.item.time_ago;
//   },
//   contentPoints(state) {
//     return state.item.points;
//   },
// };
