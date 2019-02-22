<template>
  <span class="icon-blk">
    <i :class="['icon', type ]"></i>
    <span class="icon-label">{{ label }}</span>
    <span class="icon-sub-text">{{ products }}</span>
  </span>
</template>

<script>
export default {
  props: {
    type: {
      required: true,
      type: String
    },
    label: {
      type: String,
      default: ''
    },
    products: {
      type: Number,
      required: true,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
