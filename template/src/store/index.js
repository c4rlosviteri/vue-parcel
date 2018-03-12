import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  getters: {
    msg: state => state.msg
  },
  state = {
    msg: 'Welcome to Your Vue.js App'
  }
})
