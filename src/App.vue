<template>
  <div id="app">
    <product-list-one :products="products"></product-list-one>
    <product-list-two :products="products"></product-list-two>
  </div>
</template>

<script>



import { ref } from 'vue';
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'

export default {
  components: {
    ProductListOne,
    ProductListTwo
  },
  name: 'app',
  setup() {
    const products = ref([
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
    ])
    return{
      products
    }
  }
}
</script>

<style>
body{
  font-family: Ubuntu;
  color: #555;
}
</style>