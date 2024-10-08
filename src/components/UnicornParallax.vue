<template>
  <div class="w-full h-screen relative">
    <div class="absolute inset-0 z-0 overflow-hidden opacity-70">
      <div
        v-for="(elem, idx) in parallaxElems"
        :key="idx"
        class="parallax-layer"
        :class="elem.elem"
        :style="{ top: `${elem.top}%`, left: `${elem.left}%` }"
      >
        <img :src="elem.src" :alt="elem.elem" />
      </div>
    </div>
    <div class="z-10 relative">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import Unicorn from '@/assets/svg/unicorn.svg'
import Star from '@/assets/svg/star.svg'
import Cloud from '@/assets/svg/cloud.svg'
import { onMounted, onBeforeUnmount } from 'vue'

type ParallaxElem = {
  elem: 'unicorn' | 'star' | 'cloud'
  top: number
  left: number
  src: string
}

const parallaxElem = (): ParallaxElem => {
  const iconRandom = Math.floor(Math.random() * 100)
  let elem: 'unicorn' | 'star' | 'cloud'
  if (iconRandom < 33) {
    elem = 'unicorn'
  } else if (iconRandom < 66) {
    elem = 'star'
  } else {
    elem = 'cloud'
  }

  let src: string
  switch (elem) {
    case 'unicorn':
      src = Unicorn
      break
    case 'star':
      src = Star
      break
    case 'cloud':
      src = Cloud
      break
  }
  return {
    elem,
    top: Math.floor(Math.floor(Math.random() * 200) / 10) * 10,
    left: Math.floor(Math.floor(Math.random() * 100) / 10) * 10,
    src
  }
}

const parallaxElems: ParallaxElem[] = Array.from({ length: 20 }, parallaxElem)

const handleParallaxScroll = () => {
  const scrollPosition = window.scrollY
  const parallaxLayers = document.querySelectorAll('.parallax-layer')

  parallaxLayers.forEach((layer) => {
    let speed: number
    if (layer.classList.contains('unicorn')) {
      speed = 0.8
    } else if (layer.classList.contains('cloud')) {
      speed = 0.4
    } else {
      speed = 0.2
    }
    const yPos = -(scrollPosition * speed)
    ;(layer as HTMLElement).style.transform = `translateY(${yPos}px)`
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleParallaxScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleParallaxScroll)
})
</script>

<style scoped>
.parallax-layer {
  position: absolute;
  will-change: transform;
}

.unicorn img,
.cloud img,
.star img {
  width: 100px;
  height: 100px;
}
</style>
