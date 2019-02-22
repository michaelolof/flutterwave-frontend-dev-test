<template>
  <section class="image-section">
    <div class="image-inner">
      <div v-for="p in page" :key="p" class="image-set" >
        <image-row :row="getProducts( p ).slice(0, 3)" :cart="cart" :modalProduct="modalProduct" />
        <image-row class="row-two" :row="getProducts( p ).slice( 3, 5 )" :cart="cart" :modalProduct="modalProduct" />
        <image-row class="row-three" :row="getProducts( p ).slice( 5, 7 )" :cart="cart" :modalProduct="modalProduct" />
        <image-row :row="getProducts( p ).slice( 7, 10 )" :cart="cart" :modalProduct="modalProduct" />
      </div>
    </div>
  </section>
</template>

<script>
  import ImageRow from './ImageRow.vue';

  export default {
    components: {
      ImageRow,
    },

    props: {
      page: { type: Number, required: true, },
      images: { type: Array, required: true, },
      cart: { type: Array, required: true, },
      modalProduct: { type: Array, required: true, },
    },

    methods: {
      getProducts(pageNo) {
        const start = (pageNo - 1) * 10;
        const end = pageNo * 10;
        return this.images.slice( start, end );
      }
    }
  }
</script>

