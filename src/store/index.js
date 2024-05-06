import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    plants: [],
  },
  mutations: {
    SET_PLANTS_TO_STATE: (state, plants) => {
      state.plants = plants;
    },
  },
  actions: {
    GET_PLANTS_FROM_API({ commit }) {
      return axios("http://localhost:3000/plants", {
        method: "GET",
      })
        .then((plants) => {
          commit("SET_PLANTS_TO_STATE", plants.data);
          return plants;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
  },
  getters: {
    PLANTS(state) {
      return state.plants;
    },
  },
  modules: {},
});
