<template>
  <div class="my-8 px-2" v-if="timeRemaining">
    <h1 class="text-card-pink text-xl mb-2">{{ t('dateTimeSection.countdown.Countdown') }}</h1>
    <div
      class="flex items-center justify-between border-t-[1px] border-b-[1px] border-card-gold px-2 gap-2"
    >
      <span class="text-base text-card-gold">
        {{ timeRemaining.days }} {{ t('dateTimeSection.countdown.days') }}
      </span>
      <span class="text-base text-card-gold">
        {{ timeRemaining.hours }} {{ t('dateTimeSection.countdown.hours') }}
      </span>
      <span class="text-base text-card-gold">
        {{ timeRemaining.minutes }} {{ t('dateTimeSection.countdown.minutes') }}
      </span>
      <span class="text-base text-card-gold">
        {{ timeRemaining.seconds }} {{ t('dateTimeSection.countdown.seconds') }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

interface TimeRemaining {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const { t } = useI18n()

// Target date for the countdown: 5th October 2024 at 16:00
const targetDateString = '2024-10-05T16:00:00'
const targetDate = new Date(targetDateString).getTime()

// State to hold the time remaining
const timeRemaining = ref<TimeRemaining | null>(null)
let intervalId: number | null = null

// Function to calculate the time remaining
const calculateTimeRemaining = () => {
  const now = new Date().getTime()
  const difference = targetDate - now

  if (difference > 0) {
    const days = Math.floor(difference / (1000 * 60 * 60 * 24))
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((difference % (1000 * 60)) / 1000)

    timeRemaining.value = { days, hours, minutes, seconds }
  } else {
    timeRemaining.value = null // Countdown has finished
  }
}

// Start the countdown when the component mounts
onMounted(() => {
  calculateTimeRemaining()
  intervalId = window.setInterval(calculateTimeRemaining, 1000) // Update every second
})

// Clean up the interval when the component is destroyed
onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>
