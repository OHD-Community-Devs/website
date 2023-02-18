<template>
  <div class="privacy-policy-container">
    <div class="privacy-policy-container1">
      <header data-thq="thq-navbar" class="privacy-policy-navbar">
        <router-link to="/" class="privacy-policy-navlink">
          <img
            alt="image"
            src="https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/ohddev/web/logodesign1.png"
            class="privacy-policy-branding"
          />
        </router-link>
      </header>
      <btn-group1 rootClassName="btn-group1-root-class-name"></btn-group1>
    </div>
    <div class="privacy-policy-container2">
      <h1 class="privacy-policy-text">Privacy Policy</h1>
    </div>
    <span class="privacy-policy-text1">Your Privacy Matters</span>
    <div class="privacy-policy-container3">
      <span class="privacy-policy-text2">
        <span>
          We are drafting the privacy policy, please come back at a later time
        </span>
        <br />
        <br />
        <span>
          Contact us at
          <span v-html="rawuuk2"></span>
        </span>
        <a
          href="mailto:support@ohdmodding.dev?subject="
          class="privacy-policy-link"
        >
          support@ohdmodding.dev
        </a>
        <span>if you have privacy concerns.</span>
      </span>
    </div>
  </div>
</template>

<script>
import BtnGroup1 from '../components/btn-group1'

export default {
  name: 'PrivacyPolicy',
  components: {
    BtnGroup1
  },
  data () {
    return {
      rawuuk2: ' '
    }
  },
  metaInfo: {
    title: 'privacy-policy - OHD Open-Source Modding Community',
    meta: [
      {
        property: 'og:title',
        content: 'privacy-policy - OHD Open-Source Modding Community'
      }
    ]
  }
}
</script>

<style scoped>
.privacy-policy-container {
  width: 100%;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
}
.privacy-policy-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-self: center;
  align-items: flex-start;
  margin-left: var(--dl-space-space-twounits);
  margin-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-fourunits);
  justify-content: center;
}
.privacy-policy-navbar {
  width: 100%;
  display: flex;
  z-index: 1000;
  position: relative;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
}
.privacy-policy-navlink {
  display: contents;
}
.privacy-policy-branding {
  width: 120px;
  object-fit: cover;
  margin-left: var(--dl-space-space-twounits);
  text-decoration: none;
}
.privacy-policy-container2 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.privacy-policy-text {
  color: #ffffff;
}
.privacy-policy-text1 {
  color: rgb(255, 255, 255);
}
.privacy-policy-container3 {
  flex: 0 0 auto;
  width: 100%;
  height: 100px;
  display: flex;
  margin-top: var(--dl-space-space-twounits);
  align-items: center;
  justify-content: center;
}
.privacy-policy-text2 {
  color: rgb(255, 255, 255);
  text-align: left;
}
.privacy-policy-link {
  text-decoration: underline;
}
@media(max-width: 1600px) {
  .privacy-policy-container1 {
    width: 100%;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
  }
  .privacy-policy-navbar {
    width: 100%;
    margin-left: var(--dl-space-space-twounits);
  }
}
@media(max-width: 1200px) {
  .privacy-policy-container1 {
    width: 100%;
  }
  .privacy-policy-navbar {
    width: 100%;
    max-width: auto;
    margin-left: var(--dl-space-space-twounits);
    justify-content: flex-start;
  }
}
@media(max-width: 991px) {
  .privacy-policy-container1 {
    width: 100%;
    justify-content: flex-start;
  }
  .privacy-policy-navbar {
    width: 100%;
    max-width: auto;
    align-self: center;
    align-items: center;
    margin-right: 0px;
    justify-content: flex-start;
  }
}
@media(max-width: 767px) {
  .privacy-policy-container1 {
    width: 100%;
  }
  .privacy-policy-navbar {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .privacy-policy-navbar {
    width: 479px;
    max-width: 100%;
    align-self: center;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
