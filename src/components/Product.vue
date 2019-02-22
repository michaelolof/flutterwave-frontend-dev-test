<template>
  <div class="image">
    <img :src="product.imageURL" @click="showModal()" />
    <div class="image-overlay">
      <div class="image-details">
   
        <div class="price">{{ product.price.nairatize() }}</div>
   
        <div class="name-and-availability">
          <div class="name">{{ product.name }}</div>
          <div class="availability">{{ product.availability }}</div>
        </div>

        <button v-show="!productIsInCart" class="buy-now" @click="addToCart()">Add to Cart</button>
        <button v-show="productIsInCart" class="buy-now remove-from-cart" @click="removeFromCart()">Remove From Cart</button>
        
      </div>
    </div>
  </div>
</template>


<script>
  import { deleteFromVueArray, updateVueArray, scrollToTop } from "../libs/utils";

  export default {
   props: {
    product: { type: Object, required: true },
    cart: { type: Array, required: true, },
    modalProduct: { type: Array, required: true, }
  },

  data() {
    return {
      productIsInCart: false,
    }
  },

  methods: {
    addToCart() {
      this.cart.push( this.product );
      this.productIsInCart = true;
    }, 

    removeFromCart() {
      const index = this.cart.findIndex( cart => cart.id === this.product.id );
      deleteFromVueArray( this.cart, index );
      this.productIsInCart = false;
    },

    showModal() {
      this.modalProduct.push( this.product );
      scrollToTop();
    }
  },

  mounted() {
    const self = this;
    this.productIsInCart = this.cart.find( cart => cart.id === self.id ) !== undefined;
  }
}    
</script>


