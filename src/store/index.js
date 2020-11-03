import Vue from 'vue'
import Vuex from 'vuex'
import Carrinho from './modules/Carrinho'
import Compras from './modules/Compras'

Vue.use(Vuex)

export default new Vuex.Store({
 
  modules: {
    Carrinho,
    Compras
  }
})
