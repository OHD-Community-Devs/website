<template>
  <div class="check-check">
    <svg viewBox="0 0 1024 1024" class="check-icon">
      <path
        d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Check',
  props: {},
}
</script>

<style scoped>
.check-check {
  width: 32px;
  height: 32px;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  position: relative;
  align-items: center;
  border-color: #ffffff;
  border-width: 1px;
  border-radius: var(--dl-radius-radius-round);
  flex-direction: row;
  justify-content: center;
}
.check-icon {
  fill: #ffffff;
  width: 12px;
  height: 12px;
}
</style>
