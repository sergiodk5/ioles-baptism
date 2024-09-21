import en from '@/languages/en.json'
import el from '@/languages/el.json'

const getBrowserLocale = () => {
  const fullLang = navigator.language || navigator.languages[0]
  return fullLang.split('-')[0] === 'el' ? 'el' : 'en'
}

const getStorageLocale = () => {
  return localStorage.getItem('locale') ?? getBrowserLocale()
}

const languages = {
  en,
  el
}

export const options = {
  legacy: false,
  globalInjection: true,
  locale: getStorageLocale(),
  fallbackLocale: 'el',
  messages: Object.assign(languages)
}
