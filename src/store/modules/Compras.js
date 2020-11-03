

export default {
    state: {
        funds: 0,
        Carrinho: []
    },
    mutations: {
        buyProduct(state, { productId, productPrice }) {

            state.Carrinho.push({
                productId: productId,
                productPrice: productPrice

            })

            state.funds += productPrice.value
        }
    },
    getters: {

        funds(state) {
            return state.funds
        }
    }
}
