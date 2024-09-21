<template>
  <div class="py-10 gap-3">
    <h2 class="text-center text-card-pink font-bold text-4xl mb-4">{{ t('guestStars.title') }}</h2>
    <div class="flex flex-col items-center justify-center gap-6 max-w-3xl sm:flex-row sm:mx-auto">
      <div data-aos="fade-up" class="text-center">
        <h3 class="text-xl text-center text-card-pink">{{ t('guestStars.parents.title') }}</h3>
        <ul class="text-card-gold text-2xl">
          <li>{{ t('guestStars.parents.father') }}</li>
          <li>{{ t('guestStars.parents.mother') }}</li>
        </ul>
      </div>

      <div data-aos="fade-up" data-aos-delay="100" class="text-center">
        <h3 class="text-xl text-center text-card-pink">{{ t('guestStars.godparents.title') }}</h3>
        <ul class="text-card-gold text-2xl">
          <li>{{ t('guestStars.godparents.godfather') }}</li>
          <li>{{ t('guestStars.godparents.godmother') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
