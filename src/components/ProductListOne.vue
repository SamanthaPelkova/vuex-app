<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.id">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }} $</span>
      </li>
    </ul>
    <button @click="reducePrice(4)">Reduce Price</button>
    <p>~ the prices will reduce after two seconds</p>
  </div>
</template>

<script>

import { computed } from 'vue'
import { store } from '@/store/store'


export default {
  setup() {
    const products = computed(() => store.state.products)
    const saleProducts = computed(() => store.getters.saleProducts)
    const reducePrice = (amount) => {
      store.dispatch('reducePrice', amount)
    }


    return {
      products,
      saleProducts,
      reducePrice
    }
  }
}

</script>

<style>
#product-list-one{
  background: #FFF8B1;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-one ul{
  padding: 0;
}
#product-list-one li{
  display: inline-block;
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255,255,255,0.7);
  border-radius: 7px;
}
.price{
  font-weight: bold;
  color: #E8800C;
}
</style>