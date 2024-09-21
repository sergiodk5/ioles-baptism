<template>
  <section class="bg-white py-10 px-4 text-center">
    <h2 class="mb-4 text-4xl font-bold text-center text-card-pink">
      {{ t('footer.cantWait') }}<br />
      🎉🎉💖💖🥳🥳
    </h2>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
