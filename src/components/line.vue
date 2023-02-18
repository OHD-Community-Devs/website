<template>
  <div class="line-line"></div>
</template>

<script>
export default {
  name: 'Line',
  props: {},
}
</script>

<style scoped>
.line-line {
  width: 32px;
  height: 1px;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
}
</style>
