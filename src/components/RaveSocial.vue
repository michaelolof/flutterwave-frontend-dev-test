<template>
  <div class="rave-social">

    <app-header :cart="cart"></app-header>    

    <div v-show="!doneFetching" class="spinner-blk">
      <div class="spinner"></div>
    </div>

    <div v-show="doneFetching" class="products-blk">

      <image-section v-if="products" :page="page" :images="products" :cart="cart" :modalProduct="modalProduct" ></image-section>
    
      <div class="see-more-block">
        <button v-show="!isLoadingMoreProducts" class="see-more" @click="loadMoreProducts">See More</button>
      </div>

    </div>

    <div class="follow-container">
      <div class="center button-blk">
        <button>Follow us on instagram</button>
      </div>
    </div>

    <product-detail v-if="modalProduct.length" :modalProduct="modalProduct" :cart="cart"></product-detail>

    <div v-show="isLoadingMoreProducts" class="fixed-bottom-loader">
      <div class="spinner"></div>
    </div>


  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
import ImageSection from './ImageSection.vue'
import ProductDetail from './ProductDetail.vue'
import { fetchProducts, updateVueArray } from '../libs/utils';

export default {
  props: {
    cart: { type: Array, required: true },
  },

  data() {
    return {
      page: 0,
      products: undefined,
      doneFetching: false,
      isLoadingMoreProducts: false,
      modalProduct: [],
      checkoutIsShown: true,
    }
  },
  
  components: {
    AppHeader,
    ImageSection,
    ProductDetail,
  },

  mounted() {
    const self = this;

    fetchProducts( this.page )
    .then( resp => {
      self.products = resp;
      self.doneFetching = true;
      self.page++;
    });
  },

  methods: {
    loadMoreProducts() {
      const self = this;
      self.isLoadingMoreProducts = true;
      
      fetchProducts( this.page )
      .then( resp => {
        updateVueArray( self.products, resp );
        self.page++;
        self.isLoadingMoreProducts = false;
      }) 
    },
  }

}
</script>
