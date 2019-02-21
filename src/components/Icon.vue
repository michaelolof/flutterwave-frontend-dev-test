<template>
  <span class="icon-blk">
    <i :class="['icon', type ]"></i>
    {{ label }}
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
    }
  }
}
</script>

<style lang="scss" scoped>
  i {
    // Reset icon to 1em;
    width: 16px;
    height: 16px;
    display: inline-block;
    background-color: #CCC;
    vertical-align: center;
  }
</style>
