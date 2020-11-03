
import products from '../../data/Products'
export default {
    state: {
        carrinho: []
    },
    actions: {
        buyProduct({ commit }, order) {
            commit('buyProduct', order)
        },
        initBuyProduct({ commit }) {
            commit('setCarrinho', products)
        }
    },
    mutations: {
        setCarrinho(state, carrinho) {
            state.carrinho = carrinho
        },      
    },
    getters: {
        products(state) {
            return state.carrinho
        }
    },
}