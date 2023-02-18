<template>
  <div class="component5-container">
    <span class="component5-w-i-p">{{ WIP }}</span>
  </div>
</template>

<script>
export default {
  name: 'Component5',
  props: {
    WIP: {
      type: String,
      default: 'This website is still in the very early stages of development.',
    },
  },
}
</script>

<style scoped>
.component5-container {
  display: flex;
  position: relative;
}
.component5-w-i-p {
  color: rgb(255, 255, 255);
}
</style>
