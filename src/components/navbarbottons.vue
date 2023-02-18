<template>
  <div class="navbarbottons-btn-group" v-bind:class="rootClassName">
    <button class="navbarbottons-wiki button">{{ Wiki }}</button>
    <button class="navbarbottons-discord button">{{ Discord }}</button>
    <button class="navbarbottons-git-hub button">{{ GitHub }}</button>
  </div>
</template>

<script>
export default {
  name: 'Navbarbottons',
  props: {
    GitHub: {
      type: String,
      default: 'GitHub',
    },
    Discord: {
      type: String,
      default: 'Discord',
    },
    Wiki: {
      type: String,
      default: 'Wiki',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.navbarbottons-btn-group {
  width: 100%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.navbarbottons-wiki {
  width: auto;
  min-width: auto;
  align-self: center;
  text-align: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  background-color: rgb(239, 91, 39);
}
.navbarbottons-discord {
  width: auto;
  min-width: auto;
  align-self: center;
  text-align: center;
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  background-color: rgb(239, 91, 39);
}
.navbarbottons-git-hub {
  width: auto;
  min-width: auto;
  text-align: center;
  background-color: rgb(239, 91, 39);
}
@media(max-width: 1600px) {
  .navbarbottons-btn-group {
    align-self: center;
    align-items: center;
    margin-right: 5%;
    flex-direction: row;
    justify-content: flex-end;
  }
}
@media(max-width: 1200px) {
  .navbarbottons-btn-group {
    width: 60%;
    margin-right: 0px;
    justify-content: flex-end;
  }
}
@media(max-width: 991px) {
  .navbarbottons-btn-group {
    width: auto;
    max-width: auto;
    min-width: auto;
    align-self: center;
    justify-content: center;
  }
}
@media(max-width: 767px) {
  .navbarbottons-btn-group {
    display: none;
  }
}
@media(max-width: 479px) {
  .navbarbottons-btn-group {
    width: 100%;
    display: none;
    border-color: var(--dl-color-gray-black);
    border-width: 1px;
    justify-content: center;
  }
  .navbarbottons-discord {
    width: 101px;
    height: 48px;
    font-size: 12px;
    padding-top: var(--dl-space-space-unit);
  }
  .navbarbottons-git-hub {
    width: 41px;
    height: 0px;
    font-size: 9px;
  }
}
</style>
