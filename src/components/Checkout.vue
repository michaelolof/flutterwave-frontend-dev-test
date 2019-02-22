<template>
  <div class="checkout">

    <div :class="['checkout-success', fade ]">
      {{ successMessage }}
    </div>

    <div class="checkout-inner">
      <nav class="app-navigation">
        <div class="app-navigation__inner app-width">
          <h1>YOUR CART</h1>    
        </div>
      </nav>
      <div class="content" v-if="cart.length">
          <div v-for="product in cart" :key="product.id" class="checkout-item">
            <div class="product-image"><img :src="product.imageURL" /></div>
            <div class="product-details">
              <div class="product-name">{{ product.name }}</div>
              <div class="product-availability">{{ product.availability }}</div>
              <div class="product-price">{{ product.price.nairatize() }}</div>
            </div>
            <div class="checkout-page">
              <div class="quantity-blk">
                <div class="change-quantity" @click="decreaseQuantity( product )">-</div>
                <div class="label">{{ product.quantity }}</div>
                <div class="change-quantity"  @click="increaseQuantity( product )">+</div>
              </div>
              <div class="remove" @click="removeFromCart( product )">Remove</div>
            </div>
          </div>
        
        <div class="total-blk">
          <div class="label">Total</div>
          <div class="value">{{ total.nairatize() }} </div>
        </div>

        <div class="continue-shopping" @click="continueShopping">Continue Shopping</div>

        <div v-if="!checkingOut" class="checkout-btn" @click="checkout">CHECKOUT</div>
        <div v-if="checkingOut" class="checkout-btn" disabled="disabled"><div class="spinner"></div></div>

      </div>
    </div>
  </div>
</template>

<script>
  import { deleteFromVueArray, postProducts, till } from "../libs/utils";

  export default {
    props: {
      cart: { type: Array, required: true },
    },
    data() {
      return {
        checkingOut: false,
        fade: 'fade-out',
        successMessage: "",
      }
    },
    computed: {
      total() {
        let sum = 0;
        for( let product of this.cart ) {
          sum += ( product.quantity * product.price )
        }
        return sum;
      }
    },
    methods: {
      increaseQuantity: products => products.quantity++,
      decreaseQuantity( products ) {
        if( products.quantity === 0 ) return;
        products.quantity--;
      },
      continueShopping() {
        this.$parent.checkoutIsShown = false;
      },
      removeFromCart( product ) {
        const index = this.cart.findIndex( pro => pro.id === product.id );
        deleteFromVueArray( this.cart, index );
        if( this.cart.length === 0 ) this.continueShopping();
      },
      async checkout() {
        const self = this;
        self.checkingOut = true
        const resp = await postProducts( self.cart );
        self.successMessage = resp.data.message;
        self.fade = "fade-in";
        self.checkingOut = false;
        await till( 4000 );
        self.fade = 'fade-out';
        await till( 1500 );
        this.continueShopping();
      }
    },
    mounted() {
    }
  }
</script>

<style scoped lang="scss">
  body {
    width: 100%;
    height: 100%;
  }
  #app {
    position: unset;
  }

  .checkout-btn[disabled="disabled"] {
    opacity: 0.6;
    text-align: center;

    .spinner {
      display: inline-block;
    }

    .spinner, .spinner::before {
      width: 1.2em;
      height: 1.2em;
    }
    .spinner::before {
      border: solid 2px;
    }
  }
</style>

