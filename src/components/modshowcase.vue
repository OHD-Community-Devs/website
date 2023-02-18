<template>
  <div class="modshowcase-modshowcase">
    <h1 class="modshowcase-communitymodshowcase">{{ communitymodshowcase }}</h1>
    <div class="modshowcase-modshowcasecontainer">
      <span class="modshowcase-comingsoon">
        <span>Coming Soon...</span>
        <br />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modshowcase',
  props: {
    communitymodshowcase: {
      type: String,
      default: 'Showcase',
    },
  },
}
</script>

<style scoped>
.modshowcase-modshowcase {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  margin-top: var(--dl-space-space-fourunits);
  align-items: center;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fiveunits);
  justify-content: center;
}
.modshowcase-communitymodshowcase {
  color: rgb(239, 91, 39);
  width: 453px;
  height: 44px;
  text-align: center;
}
.modshowcase-modshowcasecontainer {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modshowcase-comingsoon {
  color: rgb(255, 255, 255);
}
@media(max-width: 1600px) {
  .modshowcase-communitymodshowcase {
    color: rgb(239, 91, 39);
  }
}
</style>
