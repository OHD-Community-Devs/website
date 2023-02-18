<template>
  <section class="hero-hero">
    <div class="hero-container">
      <div class="hero-container1">
        <div class="hero-container2">
          <header data-thq="thq-navbar" class="hero-navbar">
            <img
              :alt="Branding_alt"
              :src="Branding_src"
              class="hero-branding"
            />
          </header>
          <btn-group1></btn-group1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BtnGroup1 from './btn-group1'

export default {
  name: 'Hero',
  props: {
    Branding_alt: {
      type: String,
      default: 'image'
    },
    Branding_src: {
      type: String,
      default:
        'https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/ohddev/web/logodesign1.png'
    }
  },
  components: {
    BtnGroup1
  }
}
</script>

<style scoped>
.hero-hero {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: var(--dl-space-space-fiveunits);
  flex-direction: column;
  justify-content: flex-start;
}
.hero-container {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.hero-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.hero-container2 {
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
.hero-navbar {
  width: 100%;
  display: flex;
  z-index: 1000;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  justify-content: space-between;
}
.hero-branding {
  width: 120px;
  object-fit: cover;
}
@media (max-width: 1600px) {
  .hero-hero {
    padding-left: 0px;
  }
  .hero-container {
    width: 100%;
  }
  .hero-container1 {
    width: 100%;
  }
  .hero-container2 {
    width: 100%;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
  }
  .hero-navbar {
    width: 100%;
    margin-left: var(--dl-space-space-twounits);
  }
}
@media (max-width: 1200px) {
  .hero-container2 {
    width: 100%;
  }
  .hero-navbar {
    width: 100%;
    max-width: auto;
    margin-left: var(--dl-space-space-twounits);
    justify-content: flex-start;
  }
}
@media (max-width: 991px) {
  .hero-hero {
    padding-left: var(--dl-space-space-oneandhalfunits);
  }
  .hero-container2 {
    width: 100%;
    justify-content: flex-start;
  }
  .hero-navbar {
    width: 100%;
    max-width: auto;
    align-self: center;
    align-items: center;
    margin-right: 0px;
    justify-content: flex-start;
  }
}
@media (max-width: 767px) {
  .hero-container2 {
    width: 100%;
  }
  .hero-navbar {
    width: 100%;
  }
}
@media (max-width: 479px) {
  .hero-hero {
    padding-left: 0px;
  }
  .hero-navbar {
    width: 479px;
    max-width: 100%;
    align-self: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
