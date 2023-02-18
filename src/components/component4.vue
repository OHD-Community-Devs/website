<template>
  <div class="component4-container">
    <a
      :href="link_Wiki"
      target="_blank"
      rel="noreferrer noopener"
      class="component4-wiki button"
    >
      {{ Wiki }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Component4',
  props: {
    Wiki: {
      type: String,
      default: 'Visit Our Wiki',
    },
    link_Wiki: {
      type: String,
      default: 'https://wiki.ohdmodding.dev',
    },
  },
}
</script>

<style scoped>
.component4-container {
  display: flex;
  position: relative;
}
.component4-wiki {
  width: auto;
  min-width: auto;
  align-self: center;
  margin-top: var(--dl-space-space-twounits);
  text-align: center;
  border-width: 0px;
  text-decoration: none;
  background-color: rgb(239, 91, 39);
}
</style>
