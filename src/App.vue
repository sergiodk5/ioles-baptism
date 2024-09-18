<script setup lang="ts">
import LogoSmall from '@/components/LogoSmall.vue'
import DateTimeSection from '@/components/DateTimeSection.vue'
import LocationSection from '@/components/LocationSection.vue'
import PhotoGallery from '@/components/PhotoGallery.vue'
import WelcomeSection from '@/components/WelcomeSection.vue'
import GuestStars from '@/components/GuestStars.vue'
</script>

<template>
  <div class="papper-bg">
    <div class="fixed top-0 left-0 w-full z-20 px-1 py-2 bg-white">
      <LogoSmall />
    </div>
    <WelcomeSection />
    <DateTimeSection />
    <LocationSection />
    <GuestStars />
    <PhotoGallery />
  </div>
</template>

<style scoped>
.papper-bg {
  background-image: url('@/assets/watercolor-paper.png');
  background-repeat: repeat;
  background-attachment: fixed;
}
</style>
