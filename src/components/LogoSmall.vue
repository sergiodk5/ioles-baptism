<template>
  <div class="flex items-center px-2">
    <div class="flex items-center gap-1 grow-0">
      <img src="@/assets/svg/star.svg" alt="Star" class="w-12 h-12" />
      <img src="@/assets/svg/unicorn.svg" alt="Unicorn" class="w-12 h-12" />
      <img src="@/assets/svg/cloud.svg" alt="Cloud" class="w-12 h-12" />
    </div>

    <h1 class="text-indigo font-bold text-xl">{{ t('logoSmall.text') }}</h1>

    <div class="ml-auto shrink-0 relative">
      <Menu>
        <MenuButton>{{ flag }}</MenuButton>
        <MenuItems
          class="absolute top-full right-0 flex flex-col gap-1 w-36 bg-white rounded shadow"
        >
          <MenuItem
            v-for="link in links"
            :key="link.action"
            as="template"
            v-slot="{ active }"
            class="px-2 py-1"
          >
            <button
              @click="changeLocale(link.action)"
              class="text-right w-full [&:not(:last-child)]:border-b-[1px ] border-gray-200"
              :class="{ 'bg-blue-500 text-white': active, 'bg-white text-black': !active }"
            >
              {{ link.label }}
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

type languageCode = 'en' | 'el'

interface LanguageLink {
  action: languageCode
  label: string
}

const { t, locale } = useI18n()

const flag = computed((): string => {
  return locale.value === 'en' ? '🇺🇸' : '🇬🇷'
})

const links: LanguageLink[] = [
  { action: 'en', label: '🇺🇸 English' },
  { action: 'el', label: '🇬🇷 Ελληνικά' }
]

const changeLocale = (newLocale: languageCode) => {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
}
</script>
