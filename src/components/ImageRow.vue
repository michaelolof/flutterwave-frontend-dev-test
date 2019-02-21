<template>
  <div class="image-row">
    <div v-for="image in row" :key="image" class="image">
      <img :src="'/assets/' + image" />
      <div class="overlay">
        <div class="image-details">
          <div class="price">N120,000</div>
          <div class="availability">Available in size 44, 45, 46</div>
          <button class="buy-now">Buy Now</button>
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
