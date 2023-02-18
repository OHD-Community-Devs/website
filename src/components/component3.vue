<template>
  <div class="component3-container">
    <h1 class="component3-text">
      <span>Operation Harsh Doorstop</span>
      <br />
      <span>Open-Source Modding Community</span>
      <br />
    </h1>
    <span class="component3-text5">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Component3',
  props: {
    text: {
      type: String,
      default: 'Bringing Open-Source Resources to the Community'
    }
  }
}
</script>

<style scoped>
.component3-container {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: space-between;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fiveunits);
}
.component3-text {
  color: rgb(255, 255, 255);
  width: 100%;
  text-align: center;
}
.component3-text5 {
  color: rgb(255, 255, 255);
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
}
@media (max-width: 1600px) {
  .component3-container {
    height: 100%;
  }
  .component3-text5 {
    color: rgb(255, 255, 255);
    align-self: center;
    margin-top: var(--dl-space-space-twounits);
  }
}
@media (max-width: 767px) {
  .component3-text {
    color: #ffffff;
    width: 100%;
    text-align: center;
  }
}
@media (max-width: 479px) {
  .component3-text {
    color: rgb(255, 255, 255);
    text-align: center;
  }
  .component3-text5 {
    width: 80%;
  }
}
</style>
