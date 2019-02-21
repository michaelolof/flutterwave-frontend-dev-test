<template>
  <div class="image-row">
    <div v-for="image in row" :key="image.imageURL" class="image">
      <img :src="image.imageURL" />
      <div class="image-overlay">
        <div class="image-details">
          <div class="price">{{ image.price }}</div>
          <div class="name-and-availability">
            <div class="name">{{ image.name }}</div>
            <div class="availability">{{ image.availability }}</div>
          </div>
          <button class="buy-now">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
  export default {
    props: {
      row: {
        type: Array,
        required: true
      }
    }
  }
</script>
