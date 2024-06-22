import { createStore } from "vuex";
import axios from "axios";
import createPersistedState from 'vuex-persistedstate';

export default createStore({
  state: {
    plants: [],
    cart: [],
  },
  mutations: {
    SET_PLANTS_TO_STATE: (state, plants) => {
      state.plants = plants;
    },
    // SET_CART: (state, plant) => {
    //   if (state.cart.length) {
    //     let isPlantExists = false;
    //     state.cart.map(function (item) {
    //       if (item.vcode === plant.vcode) {
    //         isPlantExists = true;
    //         item.quantity++;
    //       }
    //     });
    //     if (!isPlantExists) {
    //       state.cart.push(plant);
    //     }
    //   } else {
    //     state.cart.push(plant);
    //   }
    // },
    SET_CART: (state, plant) => {
      let existingPlant = state.cart.find(item => item.vcode === plant.vcode);
      if (existingPlant) {
        existingPlant.quantity++;
      } else {
        state.cart.push({ ...plant, quantity: 1 });
      }
    },

    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1);
    },
    INCREMENT_QUANTITY: (state, index) => {
      state.cart[index].quantity++;
    },
    DECREMENT_QUANTITY: (state, index) => {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
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
    INCREASE_ITEM_QUANTITY({ commit }, index) {
      commit('INCREMENT_QUANTITY', index);
    },
    DECREASE_ITEM_QUANTITY({ commit }, index) {
      commit('DECREMENT_QUANTITY', index);
    }
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
  plugins: [createPersistedState()],
});
