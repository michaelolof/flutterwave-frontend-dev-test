<template>
  <div id="app">    
    <app-header></app-header>
    
    <image-section></image-section>
    
    <div class="see-more-block">
      <button class="see-more">See More</button>
    </div>

    <div class="follow-container">
      <div class="center button-blk">
        <button>Follow us on instagram</button>
      </div>
    </div>
  </div>
</template>

<script>
import AppNavigation from './components/AppNavigation.vue'
import AppHeader from './components/AppHeader.vue'
import ImageSection from './components/ImageSection.vue'

export default {
  components: {
    AppNavigation,
    AppHeader,
    ImageSection
  }
}
</script>
