<template>
  <div class="btn-group1-btn-group" v-bind:class="rootClassName">
    <a
      :href="link_Wiki"
      target="_blank"
      rel="noreferrer noopener"
      class="btn-group1-wiki button"
    >
      {{ Wiki }}
    </a>
    <a
      :href="link_Discord"
      target="_blank"
      rel="noreferrer noopener"
      class="btn-group1-discord button"
    >
      {{ Discord }}
    </a>
    <a
      :href="link_GitHub"
      target="_blank"
      rel="noreferrer noopener"
      class="btn-group1-git-hub button"
    >
      {{ GitHub }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'BtnGroup1',
  props: {
    link_GitHub: {
      type: String,
      default: 'https://github.com/OHD-Community-Devs',
    },
    rootClassName: String,
    link_Discord: {
      type: String,
      default: 'https://discord.gg/HW7czZnA7p',
    },
    Discord: {
      type: String,
      default: 'Discord',
    },
    link_Wiki: {
      type: String,
      default: 'https://wiki.ohdmodding.dev',
    },
    GitHub: {
      type: String,
      default: 'GitHub',
    },
    Wiki: {
      type: String,
      default: 'Wiki',
    },
  },
}
</script>

<style scoped>
.btn-group1-btn-group {
  width: 100%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.btn-group1-wiki {
  width: auto;
  min-width: auto;
  align-self: center;
  text-align: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
  background-color: rgb(239, 91, 39);
}
.btn-group1-discord {
  width: auto;
  min-width: auto;
  align-self: center;
  text-align: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  text-decoration: none;
  background-color: rgb(239, 91, 39);
}
.btn-group1-git-hub {
  width: auto;
  min-width: auto;
  text-align: center;
  text-decoration: none;
  background-color: rgb(239, 91, 39);
}
.btn-group1-root-class-name {
  margin-right: var(--dl-space-space-twounits);
}
@media(max-width: 1600px) {
  .btn-group1-btn-group {
    align-self: center;
    align-items: center;
    margin-right: 5%;
    flex-direction: row;
    justify-content: flex-end;
  }
}
@media(max-width: 1200px) {
  .btn-group1-btn-group {
    width: 60%;
    margin-right: 0px;
    justify-content: flex-end;
  }
}
@media(max-width: 991px) {
  .btn-group1-btn-group {
    width: auto;
    max-width: auto;
    min-width: auto;
    align-self: center;
    justify-content: center;
  }
}
@media(max-width: 767px) {
  .btn-group1-btn-group {
    display: none;
  }
}
@media(max-width: 479px) {
  .btn-group1-btn-group {
    width: 100%;
    display: none;
    border-color: var(--dl-color-gray-black);
    border-width: 1px;
    justify-content: center;
  }
  .btn-group1-discord {
    width: 101px;
    height: 48px;
    font-size: 12px;
    padding-top: var(--dl-space-space-unit);
  }
  .btn-group1-git-hub {
    width: 41px;
    height: 0px;
    font-size: 9px;
  }
}
</style>
