<template>
  <div class="heading-heading">
    <h1 class="heading-text">
      <span>Operation Harsh Doorstop</span>
      <br />
      <span>Open-Source Modding Community</span>
      <br />
    </h1>
    <span class="heading-text5">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Heading',
  props: {
    text: {
      type: String,
      default: 'Bringing Open-Source Resources to the Community',
    },
  },
}
</script>

<style scoped>
.heading-heading {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: space-between;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fiveunits);
}
.heading-text {
  color: rgb(255, 255, 255);
  width: 100%;
  font-size: 36px;
  text-align: center;
  font-family: Arial Black;
}
.heading-text5 {
  color: rgb(255, 255, 255);
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
}
@media(max-width: 1600px) {
  .heading-heading {
    height: 100%;
  }
  .heading-text5 {
    color: rgb(255, 255, 255);
    align-self: center;
    margin-top: var(--dl-space-space-twounits);
  }
}
@media(max-width: 767px) {
  .heading-text {
    color: #ffffff;
    width: 100%;
    text-align: center;
  }
}
@media(max-width: 479px) {
  .heading-text {
    color: rgb(255, 255, 255);
    text-align: center;
  }
  .heading-text5 {
    width: 80%;
  }
}
</style>
