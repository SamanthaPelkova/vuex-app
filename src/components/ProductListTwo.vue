<template>
  <div id="product-list-two">
    <h2>Product List Two</h2>
    <ul>
      <li v-for="product in saleProducts" :key="product.id">
        <span class="name">{{ product.name }}</span>
        <span class="price">{{ product.price }} $</span>
      </li>
    </ul>
  </div>
</template>

<script>

import { computed, defineComponent} from 'vue'
import { store } from '@/store/store'

export default defineComponent({

  setup() {
    const products = computed(() => store.state.products)
    const saleProducts = computed(() => store.getters.saleProducts)
    return {
      products,
      saleProducts
    }
  }

})

</script>

<style>
#product-list-two{
  background: #D1E4FF;
  box-shadow: 1px 2px 6px rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  margin-bottom: 30px;
  padding: 10px 20px;
}
#product-list-two ul{
  padding: 0;
  list-style-type: none;
}
#product-list-two li{
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255,255,255,0.7);
  border-radius: 7px;
}
.price{
  font-weight: bold;
  color: #860CE8;
  display: block;
}
</style>