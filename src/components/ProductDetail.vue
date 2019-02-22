<template>
  <div class="product-detail">
    <div class="product-detail__inner">
      <div class="close-blk">
        <i class="icon icon-close" @click="closeProductDetail"></i>
      </div>
      
      <div class="image">
        <img :src="product.imageURL" />
        
        <div class="image-overlay">
          <div class="image-details">
            <div class="price">{{ product.price.nairatize() }}</div>
            <div class="name-and-availability">
              <div class="name">{{ product.name }}</div>
              <div class="availability">{{ product.availability }}</div>
            </div>
            <div class="quantity">{{ product.quantity }} Left</div>
          </div>
        </div>

        <div class="checkout-blk">
          <div class="quantity-checkout">
            <div class="change-quantity" @click="decreaseQuantity">-</div>
            <div class="quantity-label">QUANTITY <span class="bold">{{ quantity }}</span></div>
            <div class="change-quantity" @click="++quantity">+</div>
          </div>
          <button class="add-to-cart" @click="addToCart()">Add to Cart</button>
          <div class="checkout" @click="checkoutNow()">Checkout Now</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { updateVueArray, deleteFromVueArray } from "../libs/utils";

  export default {
    data() {
      return  {
        quantity: 1,
      }
    },
    props: {
      modalProduct: { type: Array, required: true, },
      cart: { type: Array, required: true },
    },
    computed: {
      product() {
        return this.modalProduct[ 0 ];
      }
    },
    methods: {
      decreaseQuantity() {
        if( this.quantity === 0 ) return;
        this.quantity--; 
      },

      addToCart() {
        // Check if product is already in cart.
        const self = this;
        const index = this.cart.findIndex( product => self.product.id === product.id );
        this.product.quantity = this.quantity;
        if( index === -1 ) this.cart.push( this.product );
        else this.cart[ index ] = this.product;
      },

      closeProductDetail() {
        deleteFromVueArray( this.modalProduct, 0 );
      },

      checkoutNow() {
        this.addToCart();
        this.closeProductDetail();
        this.$parent.$parent.checkoutIsShown = true;
      }
    },
  }
</script>
