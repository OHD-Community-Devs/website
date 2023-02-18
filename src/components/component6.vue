<template>
  <div class="component6-container">
    <h1 class="component6-text">
      <span>Operation Harsh Doorstop</span>
      <br />
      <span>Open-Source Modding Community</span>
      <br />
    </h1>
    <span class="component6-text5">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Component6',
  props: {
    text: {
      type: String,
      default: 'Bringing Open-Source Resources to the Community',
    },
  },
}
</script>

<style scoped>
.component6-container {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: space-between;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fiveunits);
}
.component6-text {
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 36px;
  text-align: center;
  font-family: Arial;
}
.component6-text5 {
  color: rgb(255, 255, 255);
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
}
@media(max-width: 1600px) {
  .component6-container {
    height: 100%;
  }
  .component6-text5 {
    color: rgb(255, 255, 255);
    align-self: center;
    margin-top: var(--dl-space-space-twounits);
  }
}
@media(max-width: 767px) {
  .component6-text {
    color: #ffffff;
    width: 100%;
    text-align: center;
  }
}
@media(max-width: 479px) {
  .component6-text {
    color: rgb(255, 255, 255);
    text-align: center;
  }
  .component6-text5 {
    width: 80%;
  }
}
</style>
