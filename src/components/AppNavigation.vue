<template>
  <nav class="app-navigation">
    <div class="app-navigation__inner app-width">
      <h1>TIGERNUT MILK</h1>    
      <span @click="showCartView"><Icon type="cart" label="Cart" :products="cart.length" /></span>
    </div>
    
  </nav>
</template>

<script>
import Icon from './Icon.vue'

export default {
  components: {
    Icon
  },
  
  props: {
    cart: {
      type: Array,
      required: true,
    }
  },
  methods: {
    showCartView() {
      const app = this.$parent.$parent.$parent;
      if( app.cart.length === 0 ) return;
      else app.checkoutIsShown = true;
    }
  }
}
</script>

