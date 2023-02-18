<template>
  <div class="component-container">
    <h1 class="component-text">
      <span>Operation Harsh Doorstop</span>
      <br />
      <span>Open-Source Modding Community</span>
      <br />
    </h1>
    <span class="component-text5">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppComponent',
  props: {
    text: {
      type: String,
      default: 'Bringing Open-Source Resources to the Community',
    },
  },
}
</script>

<style scoped>
.component-container {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: space-between;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fiveunits);
}
.component-text {
  color: rgb(255, 255, 255);
  width: 100%;
  text-align: center;
}
.component-text5 {
  color: rgb(255, 255, 255);
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
}
@media(max-width: 1600px) {
  .component-text5 {
    color: rgb(255, 255, 255);
    align-self: center;
    margin-top: var(--dl-space-space-twounits);
  }
}
@media(max-width: 767px) {
  .component-text {
    color: #ffffff;
    width: 100%;
    text-align: center;
  }
}
@media(max-width: 479px) {
  .component-text {
    color: rgb(255, 255, 255);
    text-align: center;
  }
  .component-text5 {
    width: 80%;
  }
}
</style>
