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
          { 
            name: 'Gucci Flops: Men shoe',
            imageURL: '/assets/shoe-1.png',
            availability: 'Available in size 32, 34',
            price: 'N240,000'
          }, 
          {
            name: 'Gucci Flops: Men shoe',
            imageURL: '/assets/shoe-2.jpg',
            availability: 'Availabile in size 32, 34',
            price: 'N240,000'
          }, 
          {
            name: 'Gucci Flops: Men shoe',
            imageURL: '/assets/cocktail-1.png',
            availability: 'Available in size 32, 34',
            price: 'N240,000'
          }, 
          {
            name: 'Gucci Flops: Men shoe',
            imageURL: '/assets/model-1.png',
            availability: 'Available in size 32, 34',
            price: 'N240,000'
          },
          { 
            name: 'Gucci Flops: Men shoe',
            imageURL: '/assets/man-in-coat.png',
            availability: 'Available in size 32, 34',
            price: 'N240,000' 
          }, 
          {
            name: 'Gucci Flops: Men shoe',
            imageURL: '/assets/slippers-1.png',
            availability: 'Available in size 32, 34',
            price: 'N240,000'
          }, 
          {
            name: 'Gucci Flop: Men shoe',
            imageURL: '/assets/shoes-2.png',
            availability: 'Available in size 32, 34',
            price: 'N240,000'
          },
          { 
            name: 'Gucci Flop: Men shoe',
            imageURL: '/assets/laptop-1.png',
            availability: 'Available in size 32, 34',
            price: 'N240,000' 
          }, 
          { 
            name: 'Gucci Flop: Men shoe',
            imageURL: '/assets/shirts-1.jpg',
            availability: 'Available in size 32, 34',
            price: 'N240,000' 
          }, 
          { 
            name: 'Gucci Flop: Men shoe', 
            imageURL: '/assets/shoes-3.png',
            availability: 'Available in size 32, 34',
            price: 'N240,000'
          }
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

