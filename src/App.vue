<template>
  <div id="app">
    <rave-social v-if="!checkoutIsShown"  :cart="cart"></rave-social>
    <checkout v-if="checkoutIsShown" :cart="cart"></checkout>
  </div>
</template>

<script>
  import RaveSocial from "./components/RaveSocial.vue";
  import Checkout from "./components/Checkout.vue";

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
      }
    }
  }
</script>
