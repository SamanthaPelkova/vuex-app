<template>
  <div id="app">

  </div>
</template>

<script>



import { ref } from "vue";

export default {
  components:{

  },
  name:'app',
  setup(){
    const productsToBuy = ref([
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
      }
    ])
    return{
      productsToBuy
    }
  }
}
</script>