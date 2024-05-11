import { createStore } from 'vuex'
import deals from './deals';
import customers from './customers';
export default createStore({
  modules: {
    deals, customers,
  },
  state: {},
  mutations: {},
  actions: {},
})
