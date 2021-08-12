import { ActionContext } from 'vuex';
import { Mutations, MutationTypes } from './mutations';
import { RootState } from './state';
import { fetchAsk, fetchNews } from './../api';

enum ActionTypes {
  FETCH_NEWS = 'FETCH_NEAWS',
  FETCH_ASK = 'FETCH_ASK',
  FETCH_JOBS = 'FETCH_JOBS',
}

type MyActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, 'commit'>;

const actions = {
  // 😊 여기서 payload 는 추가적으로 들어올 인자를 뜻하는 것이다!!
  async [ActionTypes.FETCH_NEWS]({ commit }: MyActionContext, payload?: any) {
    const { data } = await fetchNews();
    commit(MutationTypes.SET_NEWS, data);

    return data;
  },
  async [ActionTypes.FETCH_ASK]({ commit }: MyActionContext, payload?: any) {
    const { data } = await fetchAsk();
    commit(MutationTypes.SET_ASK, data);

    return data;
  },
  async [ActionTypes.FETCH_JOBS]({ commit }: MyActionContext, payload?: any) {
    const { data } = await fetchAsk();
    commit(MutationTypes.SET_JOBS, data);

    return data;
  },
  // INCREASE({ state, commit }) {
  //   commit('SET_COUNT', state.count + 1);
  // },
  // DECREASE({ state, commit }) {
  //   commit('SET_COUNT', state.count - 1);
  // },
};

type Actions = typeof actions;

export { ActionTypes, actions, Actions };

// import {
// import { NewsItem } from './../api/index';
//  fetchNews,
//   fetchAsk,
//   fetchJobs,
//   fetchUser,
//   fetchItem,
//   fetchList,
// } from '../api/index';

// export default {
//   FETCH_NEWS({ commit }) {
//     return fetchNews().then(response => commit('SET_NEWS', response.data));
//   },
//   FETCH_ASK({ commit }) {
//     return fetchAsk().then(response => commit('SET_ASK', response.data));
//   },
//   FETCH_JOBS({ commit }) {
//     return fetchJobs().then(response => commit('SET_JOBS', response.data));
//   },
//   FETCH_USER({ commit }, userId) {
//     return fetchUser(userId).then(res => commit('SET_USER', res.data));
//   },
//   FETCH_ITEM({ commit }, itemId) {
//     return fetchItem(itemId).then(res => commit('SET_ITEM', res.data));
//   },
//   // hoc
//   FETCH_LIST({ commit }, listType) {
//     return fetchList(listType).then(res => commit('SET_LIST', res.data));
//   },
// };
