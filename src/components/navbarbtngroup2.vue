<template>
  <div class="navbarbtngroup2-navbarbtngroup">
    <a
      :href="link_Wiki"
      target="_blank"
      rel="noreferrer noopener"
      class="navbarbtngroup2-wiki button"
    >
      {{ Wiki }}
    </a>
    <a
      :href="link_Discord"
      target="_blank"
      rel="noreferrer noopener"
      class="navbarbtngroup2-discord button"
    >
      {{ Discord }}
    </a>
    <a
      :href="link_GitHub"
      target="_blank"
      rel="noreferrer noopener"
      class="navbarbtngroup2-git-hub button"
    >
      {{ GitHub }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Navbarbtngroup2',
  props: {
    Wiki: {
      type: String,
      default: 'Wiki',
    },
    link_Wiki: {
      type: String,
      default: 'https://wiki.ohdmodding.dev',
    },
    Discord: {
      type: String,
      default: 'Discord',
    },
    link_Discord: {
      type: String,
      default: 'https://discord.gg/HW7czZnA7p',
    },
    GitHub: {
      type: String,
      default: 'GitHub',
    },
    link_GitHub: {
      type: String,
      default: 'https://github.com/OHD-Community-Devs',
    },
  },
}
</script>

<style scoped>
.navbarbtngroup2-navbarbtngroup {
  width: 100%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbarbtngroup2-wiki {
  width: auto;
  height: auto;
  font-size: 16px;
  min-width: auto;
  align-self: center;
  font-style: normal;
  max-height: auto;
  text-align: center;
  font-weight: 700;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
  background-color: rgb(239, 91, 39);
}
.navbarbtngroup2-discord {
  width: auto;
  height: auto;
  font-size: 16px;
  min-width: auto;
  align-self: center;
  font-style: normal;
  max-height: auto;
  text-align: center;
  font-weight: 700;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
  background-color: rgb(239, 91, 39);
}
.navbarbtngroup2-git-hub {
  width: auto;
  height: auto;
  font-size: 16px;
  min-width: auto;
  font-style: normal;
  max-height: auto;
  text-align: center;
  font-weight: 700;
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
  background-color: rgb(239, 91, 39);
}
@media(max-width: 1600px) {
  .navbarbtngroup2-navbarbtngroup {
    align-self: center;
    align-items: center;
    margin-right: 5%;
    flex-direction: row;
    justify-content: flex-end;
  }
  .navbarbtngroup2-wiki {
    max-height: auto;
    padding-top: var(--dl-space-space-unit);
  }
  .navbarbtngroup2-discord {
    max-height: auto;
    padding-top: var(--dl-space-space-unit);
  }
  .navbarbtngroup2-git-hub {
    max-height: auto;
    padding-top: var(--dl-space-space-unit);
  }
}
@media(max-width: 1200px) {
  .navbarbtngroup2-navbarbtngroup {
    width: 60%;
    margin-right: 0px;
    justify-content: flex-end;
  }
  .navbarbtngroup2-wiki {
    height: auto;
    margin-top: var(--dl-space-space-unit);
    min-height: auto;
    margin-bottom: var(--dl-space-space-unit);
  }
  .navbarbtngroup2-discord {
    margin-top: var(--dl-space-space-unit);
    margin-bottom: var(--dl-space-space-unit);
  }
}
@media(max-width: 991px) {
  .navbarbtngroup2-navbarbtngroup {
    width: auto;
    max-width: auto;
    min-width: auto;
    align-self: center;
    justify-content: center;
  }
}
@media(max-width: 767px) {
  .navbarbtngroup2-navbarbtngroup {
    display: none;
  }
}
@media(max-width: 479px) {
  .navbarbtngroup2-navbarbtngroup {
    width: 100%;
    display: none;
    border-color: var(--dl-color-gray-black);
    border-width: 1px;
    justify-content: center;
  }
  .navbarbtngroup2-discord {
    width: 101px;
    height: 48px;
    font-size: 12px;
    padding-top: var(--dl-space-space-unit);
  }
  .navbarbtngroup2-git-hub {
    width: 41px;
    height: 0px;
    font-size: 9px;
  }
}
</style>
