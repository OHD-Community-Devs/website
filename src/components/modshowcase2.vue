<template>
  <div class="modshowcase2-modshowcase">
    <h1 class="modshowcase2-communitymodshowcase">{{ communitymodshowcase }}</h1>
    <div class="modshowcase2-modshowcasecontainer">
      <span class="modshowcase2-comingsoon">
        <span>Coming Soon...</span>
        <br />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modshowcase2',
  props: {
    communitymodshowcase: {
      type: String,
      default: 'Showcase',
    },
  },
}
</script>

<style scoped>
.modshowcase2-modshowcase {
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
.modshowcase2-communitymodshowcase {
  color: rgb(239, 91, 39);
  width: 453px;
  height: 44px;
  font-size: 30px;
  text-align: center;
  font-family: Arial Black;
}
.modshowcase2-modshowcasecontainer {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modshowcase2-comingsoon {
  color: rgb(255, 255, 255);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}
@media(max-width: 1600px) {
  .modshowcase2-communitymodshowcase {
    color: rgb(239, 91, 39);
  }
}
</style>
