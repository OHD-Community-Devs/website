import presetIcons from '@unocss/preset-icons';
import { NuxtConfig } from '@nuxt/types';
import { NuxtRequest, NuxtResponse } from '@nuxt/types';

const config: NuxtConfig = {
  srcDir: 'src',
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
  ],
  build: {
    transpile: ['@headlessui/vue'],
  },
  unocss: {
    uno: false,
    preflight: false,
    icons: true,
    presets: [
      presetIcons({
        scale: 1.2,
        extraProperties: {
          display: 'inline-block',
        },
      }),
    ],
    safelist: ['i-twemoji-flag-us-outlying-islands', 'i-twemoji-flag-turkey'],
  },
  // localization - i18n config
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.json',
      },
      { code: 'tr', file: 'tr-TR.json' },
    ],
    defaultLocale: 'tr',
    lazy: true,
    langDir: 'locales/',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root', // recommended
    },
    vueI18n: {
      legacy: false,
      locale: 'tr',
      fallbackLocale: 'tr',
      availableLocales: ['en', 'tr'],
    },
  },
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    storageKey: 'color-mode',
  },
  tailwindcss: {
    configPath: './tailwind.config.ts',
  },
  vite: {
    logLevel: 'info',
  },
  serverMiddleware: [
    {
      path: '/src',
      handler: (req: NuxtRequest, res: NuxtResponse, next: Function) => {
        res.setHeader('Access-Control-Allow-Origin', 'https://ohdmodding.dev');
        res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        next();
      },
    },
    {
      path: '/src/middleware',
      handler: '~/src/middleware',
    },
  ],
};

export default config;
