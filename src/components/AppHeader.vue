<template>  
  <header class="app-header">
    <app-navigation></app-navigation>
    <h3>
      Fashion & Lifestyle <span class="text-image mail-text-image phone-text-image space-text-image">admin@ashluxury.com</span><br/>
      whatsapp: +234 8169761216 <span class="text-image world-text-image space-text-image">worldwide shipping</span><br/>
      <span class="text-image pin-text-image clock-text-image space-text-image">22B Admiralty Way</span>HQ opens 10am - 8pm (mon-sat)
    </h3>
  </header>
</template>

<script>
  import AppNavigation from './AppNavigation.vue';

  export default {
    components: {
      AppNavigation,
    }
  }
</script>