<template>
  <div id="app">
    <rave-social v-if="!checkoutIsShown"  :cart="cart"></rave-social>
    <checkout v-if="checkoutIsShown" :cart="cart"></checkout>
  </div>
</template>

<script>
  import RaveSocial from "./components/RaveSocial.vue";
  import Checkout from "./components/Checkout.vue";
  import { persistor } from "./libs/utils";

  const cartCache = persistor('cart');

  export default {
    components: {
      RaveSocial,
      Checkout,
    },
    data() {
      return {
        checkoutIsShown: false,
        cart: [],
      }
    },
    watch: {
      cart(newVal, oldVal) {
        cartCache.post( newVal );
      }
    },
    mounted() {
      const cachedCart = cartCache.get();
      if( cachedCart !== null ) this.cart = cartCache.get();
    }
  }
</script>
