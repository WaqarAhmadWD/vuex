import { createStore } from "vuex";

export default createStore({
  state: {
    details: [
      {
        id: "1",
        name: "Waqar",
        pro: "Web developer",
      },
      {
        id: "2",
        name: "sufyan",
        pro: "content writer",
      },
    ],
    isFound: false,
  },
  getters: {},
  mutations: {
    setDetails(state, payload) {
      console.log(state.details);
      if (!state.isFound) {
        state.details.push(payload);
      }
      state.isFound = false;
      console.log(payload);
    },
    setReplace(state, payload) {
      state.details = state.details.map((element) => {
        if (element.id === payload.id) {
          state.isFound = true;
          return payload;
        } else {
          return element;
        }
      });
    },
    setDelete(state, payload) {
      console.log(payload);
      state.details = state.details.filter((element) => {
        return element.id !== payload;
      });
    },
  },
  actions: {
    async setDetails({ commit }, payload) {
      await commit("setReplace", payload);
      commit("setDetails", payload);
    },
    async setDelete({ commit }, payload) {
      await commit("setDelete", payload);
    },
  },
  modules: {},
});
