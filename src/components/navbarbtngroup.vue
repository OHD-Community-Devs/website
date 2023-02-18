<template>
  <div class="navbarbtngroup-navbarbtngroup">
    <a
      :href="link_Wiki"
      target="_blank"
      rel="noreferrer noopener"
      class="navbarbtngroup-wiki button"
    >
      {{ Wiki }}
    </a>
    <a
      :href="link_Discord"
      target="_blank"
      rel="noreferrer noopener"
      class="navbarbtngroup-discord button"
    >
      {{ Discord }}
    </a>
    <a
      :href="link_GitHub"
      target="_blank"
      rel="noreferrer noopener"
      class="navbarbtngroup-git-hub button"
    >
      {{ GitHub }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Navbarbtngroup',
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
.navbarbtngroup-navbarbtngroup {
  width: 100%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbarbtngroup-wiki {
  width: auto;
  font-size: 16px;
  min-width: auto;
  align-self: center;
  max-height: var(--dl-size-size-xsmall);
  text-align: center;
  padding-top: var(--dl-space-space-halfunit);
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
  background-color: rgb(239, 91, 39);
}
.navbarbtngroup-discord {
  width: auto;
  font-size: 16px;
  min-width: auto;
  align-self: center;
  max-height: var(--dl-size-size-xsmall);
  text-align: center;
  padding-top: var(--dl-space-space-halfunit);
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
  background-color: rgb(239, 91, 39);
}
.navbarbtngroup-git-hub {
  width: auto;
  font-size: 16px;
  min-width: auto;
  max-height: var(--dl-size-size-xsmall);
  text-align: center;
  padding-top: var(--dl-space-space-halfunit);
  text-decoration: none;
  background-color: rgb(239, 91, 39);
}
@media(max-width: 1600px) {
  .navbarbtngroup-navbarbtngroup {
    align-self: center;
    align-items: center;
    margin-right: 5%;
    flex-direction: row;
    justify-content: flex-end;
  }
  .navbarbtngroup-wiki {
    max-height: var(--dl-size-size-xsmall);
    padding-top: var(--dl-space-space-halfunit);
  }
  .navbarbtngroup-discord {
    max-height: var(--dl-size-size-xsmall);
    padding-top: var(--dl-space-space-halfunit);
  }
  .navbarbtngroup-git-hub {
    max-height: var(--dl-size-size-xsmall);
    padding-top: var(--dl-space-space-halfunit);
  }
}
@media(max-width: 1200px) {
  .navbarbtngroup-navbarbtngroup {
    width: 60%;
    margin-right: 0px;
    justify-content: flex-end;
  }
  .navbarbtngroup-wiki {
    height: var(--dl-size-size-xsmall);
    min-height: auto;
  }
}
@media(max-width: 991px) {
  .navbarbtngroup-navbarbtngroup {
    width: auto;
    max-width: auto;
    min-width: auto;
    align-self: center;
    justify-content: center;
  }
}
@media(max-width: 767px) {
  .navbarbtngroup-navbarbtngroup {
    display: none;
  }
}
@media(max-width: 479px) {
  .navbarbtngroup-navbarbtngroup {
    width: 100%;
    display: none;
    border-color: var(--dl-color-gray-black);
    border-width: 1px;
    justify-content: center;
  }
  .navbarbtngroup-discord {
    width: 101px;
    height: 48px;
    font-size: 12px;
    padding-top: var(--dl-space-space-unit);
  }
  .navbarbtngroup-git-hub {
    width: 41px;
    height: 0px;
    font-size: 9px;
  }
}
</style>
