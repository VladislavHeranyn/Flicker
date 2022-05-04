import axios from "axios";

import {
  countItems,
  sortNested,
  splitToWords
} from "@/store/modules/helpers/functions";

const baseUrl =
  "http://52.214.226.126:3006/?query=lang-en-us&format=json&tags=";

export default {
  state: {
    request: axios.CancelToken.source(),
    loading: false,
    tags: [],
    posts: []
  },
  actions: {
    async sendRequest(ctx, payload) {
      try {
        ctx.commit("toggleLoading");
        const res = await axios.get(baseUrl + payload, {
          cancelToken: this.state.main.request.token
        });

        res.data.items.sort(
          (prev, next) =>
            Date.parse(next.published) - Date.parse(prev.published)
        );

        ctx.commit("updatePosts", res.data.items);
        let tags = splitToWords(res.data.items);
        let countObj = countItems(tags);
        tags = sortNested(Object.entries(countObj)).slice(0, 5);
        ctx.commit("setTags", tags);
      } catch (e) {
        console.log(`Error: ${e}`);
      } finally {
        ctx.commit("toggleLoading");
      }
    },
    async cancelRequest(ctx) {
      ctx.commit("cancelToken");
    }
  },
  mutations: {
    cancelToken(state) {
      state.request.cancel("Request cancelled");
      state.request = axios.CancelToken.source();
    },
    toggleLoading(state) {
      state.loading = !state.loading;
    },
    updatePosts(state, payload) {
      state.posts = payload;
    },
    setTags(state, payload) {
      state.tags = payload;
    },
    createToken(state) {
      state.request = axios.CancelToken.source();
    }
  },
  getters: {
    // Replaced with $store.prop.value
    // getLoading(state){
    //     return state.loading
    // },
    // getPosts(state) {
    //     return state.posts
    // },
    // getTags(state){
    //     return state.tags
    // }
  }
};
