import { createStore } from 'vuex';

export const store = createStore({
    state: {
        products: [
            {
                id: 1,
                name: 'Banana',
                price: 2
            },
            {
                id: 2,
                name: 'Apple',
                price: 1
            },
            {
                id: 3,
                name: 'Orange',
                price: 6
            },
            {
                id: 4,
                name: 'Lemon',
                price: 3
            }
        ]
    },
    getters: {
        saleProducts: state => {
            let saleProducts = state.products.map( product => {
                return {
                    name: `**${product.name}**`,
                    price: product.price / 2
                }
            })
            return { saleProducts }
        }
    }
})