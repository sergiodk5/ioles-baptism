<template>
  <section id="date-time" class="bg-white py-10 text-center">
    <div data-aos="fade-up" class="flex justify-center items-center h-12 overflow-hidden relative">
      <svg width="200" height="200" viewBox="0 0 200 200" class="absolute top-0">
        <path id="curve" d="M 30,100 A 70,70 0 0,1 170,100" fill="transparent" stroke="none" />
        <text class="text-lg fill-card-pink" text-anchor="middle">
          <textPath :href="'#curve'" startOffset="50%">{{ t('dateTimeSection.october') }}</textPath>
        </text>
      </svg>
    </div>
    <div data-aos="fade-up" data-aos-delay="100" class="flex items-center justify-center gap-2">
      <div
        class="text-center border-t-[1px] border-b-[1px] border-card-pink py-1 text-2xl text-card-pink"
      >
        {{ t('dateTimeSection.saturday') }}
      </div>
      <div class="flex items-center justify-center text-card-gold text-6xl">05</div>
      <div
        class="text-center border-t-[1px] border-b-[1px] border-card-pink py-1 text-2xl text-card-pink"
      >
        {{ t('dateTimeSection.at') }}
      </div>
    </div>
    <div
      data-aos="fade-up"
      data-aos-delay="200"
      class="flex items-center justify-center text-card-pink text-lg mt-2"
    >
      2024
    </div>

    <div class="asd max-w-3xl mx-auto">
      <CountDown />
    </div>

    <p data-aos="fade-up" data-aos-delay="400" class="text-xl mt-8 text-card-gold font-bold">
      {{ t('dateTimeSection.chapel') }}<br />({{ t('dateTimeSection.chapelAlt') }}),
      {{ t('dateTimeSection.city') }}
    </p>
  </section>
</template>

<script lang="ts" setup>
import CountDown from '@/components/CountDown.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
