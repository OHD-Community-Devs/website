import { useI18n } from 'vue-i18n' // import i18n from vue-i18n

export const useLang = () => { // create a function
  const { t } = useI18n() // call the useI18n() function from vue-i18n, then get the t function from the returned object
  return { // return the t function
    t,
  }
}
