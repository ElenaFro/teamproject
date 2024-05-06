import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    plants: [],
    cart: [],
  },
  mutations: {
    SET_PLANTS_TO_STATE: (state, plants) => {
      state.plants = plants;
    },
    SET_CART: (state, plant) => {
      if (state.cart.length) {
        let isPlantExists = false;
        state.cart.map(function (item) {
          if (item.vcode === plant.vcode) {
            isPlantExists = true;
            item.quantity++;
          }
        });
        if (!isPlantExists) {
          state.cart.push(plant);
        }
      } else {
        state.cart.push(plant);
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
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
    ADD_TO_CART({ commit }, plant) {
      commit("SET_CART", plant);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
  },
  getters: {
    PLANTS(state) {
      return state.plants;
    },
    CART(state) {
      return state.cart;
    },
  },
  modules: {},
});
