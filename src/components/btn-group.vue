<template>
  <div class="btn-group-btn-group">
    <a
      :href="link_Wiki"
      target="_blank"
      rel="noreferrer noopener"
      class="btn-group-wiki button"
    >
      {{ Wiki }}
    </a>
    <a
      :href="link_Discord"
      target="_blank"
      rel="noreferrer noopener"
      class="btn-group-discord button"
    >
      {{ Discord }}
    </a>
    <a
      :href="link_GitHub"
      target="_blank"
      rel="noreferrer noopener"
      class="btn-group-git-hub button"
    >
      {{ GitHub }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'BtnGroup',
  props: {
    Wiki: {
      type: String,
      default: 'Wiki'
    },
    link_Wiki: {
      type: String,
      default: 'https://wiki.ohdmodding.dev'
    },
    Discord: {
      type: String,
      default: 'Discord'
    },
    link_Discord: {
      type: String,
      default: 'https://discord.gg/HW7czZnA7p'
    },
    GitHub: {
      type: String,
      default: 'GitHub'
    },
    link_GitHub: {
      type: String,
      default: 'https://github.com/OHD-Community-Devs'
    }
  }
}
</script>

<style scoped>
.btn-group-btn-group {
  width: 100%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.btn-group-wiki {
  width: auto;
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
.btn-group-discord {
  width: auto;
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
.btn-group-git-hub {
  width: auto;
  min-width: auto;
  max-height: var(--dl-size-size-xsmall);
  text-align: center;
  padding-top: var(--dl-space-space-halfunit);
  text-decoration: none;
  background-color: rgb(239, 91, 39);
}
@media (max-width: 1600px) {
  .btn-group-btn-group {
    align-self: center;
    align-items: center;
    margin-right: 5%;
    flex-direction: row;
    justify-content: flex-end;
  }
  .btn-group-wiki {
    max-height: var(--dl-size-size-xsmall);
    padding-top: var(--dl-space-space-halfunit);
  }
  .btn-group-discord {
    max-height: var(--dl-size-size-xsmall);
    padding-top: var(--dl-space-space-halfunit);
  }
  .btn-group-git-hub {
    max-height: var(--dl-size-size-xsmall);
    padding-top: var(--dl-space-space-halfunit);
  }
}
@media (max-width: 1200px) {
  .btn-group-btn-group {
    width: 60%;
    margin-right: 0px;
    justify-content: flex-end;
  }
  .btn-group-wiki {
    height: var(--dl-size-size-xsmall);
    min-height: auto;
  }
}
@media (max-width: 991px) {
  .btn-group-btn-group {
    width: auto;
    max-width: auto;
    min-width: auto;
    align-self: center;
    justify-content: center;
  }
}
@media (max-width: 767px) {
  .btn-group-btn-group {
    display: none;
  }
}
@media (max-width: 479px) {
  .btn-group-btn-group {
    width: 100%;
    display: none;
    border-color: var(--dl-color-gray-black);
    border-width: 1px;
    justify-content: center;
  }
  .btn-group-discord {
    width: 101px;
    height: 48px;
    font-size: 12px;
    padding-top: var(--dl-space-space-unit);
  }
  .btn-group-git-hub {
    width: 41px;
    height: 0px;
    font-size: 9px;
  }
}
</style>
