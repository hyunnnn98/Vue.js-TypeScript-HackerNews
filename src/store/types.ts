// store/types.ts
import { CommitOptions, DispatchOptions, Store } from 'vuex';
import { Actions } from './actions';
import { Getters } from './getters';
import { Mutations } from './mutations';
import { RootState } from './state';

// 뷰엑스 내부적으로 정의된 타입에 개발자가 프로젝트에서 사용하기 위해 작성한 state, mutations 타입 코드를 추가한 코드.
// 새로 정의돈 MyStore 타입을 프로젝트에서 인식시켜 타입을 연동.
type MyMutations = {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload?: P,
    options?: CommitOptions
  ): ReturnType<Mutations[K]>;
};

type MyActions = {
  dispatch<K extends keyof Actions>(
    key: K,
    payload?: Parameters<Actions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<Actions[K]>;
};

type MyGetters = {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export type MyStore = Omit<
  Store<RootState>,
  'getters' | 'commit' | 'dispatch'
> &
  MyMutations &
  MyActions &
  MyGetters;
