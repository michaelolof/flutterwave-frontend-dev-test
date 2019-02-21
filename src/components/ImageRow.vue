<template>
  <div class="image-row">
    <div v-for="image in row" :key="image" class="image">
      <img :src="'/assets/' + image" />
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
