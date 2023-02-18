<template>
  <div class="wiki-container">
    <a
      :href="link_Wiki"
      target="_blank"
      rel="noreferrer noopener"
      class="wiki-wiki button"
    >
      {{ Wiki }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Wiki',
  props: {
    link_Wiki: {
      type: String,
      default: 'https://wiki.ohdmodding.dev',
    },
    Wiki: {
      type: String,
      default: 'Visit Our Wiki',
    },
  },
}
</script>

<style scoped>
.wiki-container {
  display: flex;
  position: relative;
}
.wiki-wiki {
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
