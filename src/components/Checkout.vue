<template>
  <div class="checkout">
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

        <div class="checkout">CHECKOUT</div>

      </div>
    </div>
  </div>
</template>

<script>
  import { deleteFromVueArray } from "../libs/utils";

  export default {
    props: {
      cart: { type: Array, required: true },
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
      }
    },
  }
</script>

<style scoped>
  body {
    width: 100%;
    height: 100%;
  }
  #app {
    position: unset;
  }
</style>

