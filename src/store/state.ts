import { NewsItem, CommonItem } from '@/api';

const state = {
  news: [] as NewsItem[],
  ask: [] as CommonItem[],
  jobs: [] as CommonItem[],
  //     user: {},
  //     item: {},
  //     list: [],
};

type RootState = typeof state;

export { state, RootState };
