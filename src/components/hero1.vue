<template>
  <section class="hero1-hero">
    <div class="hero1-container">
      <div class="hero1-container1">
        <div class="hero1-container2">
          <header data-thq="thq-navbar" class="hero1-navbar">
            <img :alt="Branding_alt" :src="Branding_src" class="hero1-branding" />
          </header>
          <btn-group></btn-group>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BtnGroup from './btn-group'

export default {
  name: 'Hero1',
  props: {
    Branding_src: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/ohddev/web/logodesign1.png',
    },
    Branding_alt: {
      type: String,
      default: 'image',
    },
  },
  components: {
    BtnGroup,
  },
}
</script>

<style scoped>
.hero1-hero {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: var(--dl-space-space-fiveunits);
  flex-direction: column;
  justify-content: flex-start;
}
.hero1-container {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.hero1-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.hero1-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-right: var(--dl-space-space-oneandhalfunits);
  padding-bottom: var(--dl-space-space-fourunits);
  justify-content: center;
}
.hero1-navbar {
  width: 100%;
  display: flex;
  z-index: 1000;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  justify-content: space-between;
}
.hero1-branding {
  width: 120px;
  object-fit: cover;
}
@media(max-width: 1600px) {
  .hero1-hero {
    padding-left: 0px;
  }
  .hero1-container {
    width: 100%;
  }
  .hero1-container1 {
    width: 100%;
  }
  .hero1-container2 {
    width: 100%;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
  }
  .hero1-navbar {
    width: 100%;
    margin-left: var(--dl-space-space-twounits);
  }
}
@media(max-width: 1200px) {
  .hero1-container2 {
    width: 100%;
  }
  .hero1-navbar {
    width: 100%;
    max-width: auto;
    margin-left: var(--dl-space-space-twounits);
    justify-content: flex-start;
  }
}
@media(max-width: 991px) {
  .hero1-hero {
    padding-left: var(--dl-space-space-oneandhalfunits);
  }
  .hero1-container2 {
    width: 100%;
    justify-content: flex-start;
  }
  .hero1-navbar {
    width: 100%;
    max-width: auto;
    align-self: center;
    align-items: center;
    margin-right: 0px;
    justify-content: flex-start;
  }
}
@media(max-width: 767px) {
  .hero1-container2 {
    width: 100%;
  }
  .hero1-navbar {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .hero1-hero {
    padding-left: 0px;
  }
  .hero1-navbar {
    width: 479px;
    max-width: 100%;
    align-self: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
