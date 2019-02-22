<template>
  <div class="image-row">
    <product v-for="image in row" :key="image.id" :product="image" :cart="cart" :modalProduct="modalProduct"></product> 
  </div>  
</template>

<script>
  import Product from "./Product.vue";

  export default {
    components: {
      Product,
    },
    
    props: {
      row: { type: Array, required: true },
      cart: { type: Array, required: true, },
      modalProduct: { type: Array, required: true, },
    },

  }
</script>
