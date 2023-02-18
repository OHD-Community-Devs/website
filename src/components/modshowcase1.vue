<template>
  <div class="modshowcase1-modshowcase">
    <h1 class="modshowcase1-communitymodshowcase">{{ communitymodshowcase }}</h1>
    <div class="modshowcase1-modshowcasecontainer">
      <span class="modshowcase1-comingsoon">
        <span>Coming Soon...</span>
        <br />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modshowcase1',
  props: {
    communitymodshowcase: {
      type: String,
      default: 'Showcase',
    },
  },
}
</script>

<style scoped>
.modshowcase1-modshowcase {
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
.modshowcase1-communitymodshowcase {
  color: rgb(239, 91, 39);
  width: 453px;
  height: 44px;
  text-align: center;
}
.modshowcase1-modshowcasecontainer {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modshowcase1-comingsoon {
  color: rgb(255, 255, 255);
}
@media(max-width: 1600px) {
  .modshowcase1-communitymodshowcase {
    color: rgb(239, 91, 39);
  }
}
</style>
