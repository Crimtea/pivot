import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    login: false,
    at: () => {
      let at = '6721143105810921163101897';
      let list = at.split('2')
      let temp = []
      for (let i in list) {
        temp.push(...list[i].split('3'))
      }
      list = [];
      for (let i in temp) {
        list.push(...temp[i].split('8'))
      }
      at = ''
      for (let i in list) {
        at += String.fromCharCode(Number(list[i]))
      }
      return at
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
