<template>
  <div class="wikibtn-wikibtn">
    <a
      :href="link_Wiki"
      target="_blank"
      rel="noreferrer noopener"
      class="wikibtn-wiki button"
    >
      {{ Wiki }}
    </a>
  </div>
</template>

<script>
export default {
  name: 'Wikibtn',
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
.wikibtn-wikibtn {
  display: flex;
  position: relative;
}
.wikibtn-wiki {
  width: auto;
  height: auto;
  font-size: 16px;
  min-width: auto;
  align-self: center;
  font-style: normal;
  margin-top: var(--dl-space-space-twounits);
  max-height: auto;
  text-align: center;
  font-weight: 700;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
  background-color: rgb(239, 91, 39);
}
</style>
