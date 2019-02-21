<template>
  <section class="image-section">
    <div class="image-inner">
      <div class="image-set">
        <image-row :row="rowOne" />
        <image-row class="row-two" :row="rowTwo" />
        <image-row class="row-three" :row="rowThree" />
        <image-row :row="rowFour" />
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

    data() {
      return {
        images: [
          'shoe-1.png', 'shoe-2.jpg', 'cocktail-1.png', 'model-1.png',
          'man-in-coat.png', 'slippers-1.png', 'shoes-2.png',
          'laptop-1.png', 'shirts-1.jpg', 'shoes-3.png'
        ]
      }
    },

    computed: {
      rowOne() {
        return this.images.splice( 0, 3 ); 
      },

      rowTwo() {
        return this.images.splice( 0, 2 );
      },

      rowThree() {
        return this.images.splice( 0, 2 )
      },

      rowFour() {
        return this.images.splice( 0, 3 )
      }
    }
  }
</script>

