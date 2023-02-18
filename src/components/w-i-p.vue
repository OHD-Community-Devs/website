<template>
  <div class="w-i-p-container"><span class="w-i-p-w-i-p">{{ WIP }}</span></div>
</template>

<script>
export default {
  name: 'WIP',
  props: {
    WIP: {
      type: String,
      default: 'This website is still in the very early stages of development.',
    },
  },
}
</script>

<style scoped>
.w-i-p-container {
  display: flex;
  position: relative;
}
.w-i-p-w-i-p {
  color: rgb(255, 255, 255);
}
</style>
