<template>
  <div class="home-container">
    <section class="home-hero">
      <div class="home-container1">
        <div class="home-n-v-container">
          <header data-thq="thq-navbar" class="home-navbar">
            <img
              alt="image"
              src="https://cdn.statically.io/gh/Sudo-Ivan/MyWebsite-Assets/main/images/ohddev/web/logodesign1.png"
              class="home-branding"
            />
          </header>
          <div class="home-navbarbtngroup">
            <a
              href="https://discord.gg/HW7czZnA7p"
              target="_blank"
              rel="noreferrer noopener"
              class="home-discord button"
            >
              Discord
            </a>
            <a
              href="https://github.com/OHD-Community-Devs"
              target="_blank"
              rel="noreferrer noopener"
              class="home-git-hub button"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
    <app-heading></app-heading>
    <app-component5></app-component5>
    <app-modshowcase2></app-modshowcase2>
    <f-a-q3></f-a-q3>
    <app-footer1></app-footer1>
  </div>
</template>

<script>
import AppHeading from '../components/heading'
import AppComponent5 from '../components/component5'
import AppModshowcase2 from '../components/modshowcase2'
import FAQ3 from '../components/f-a-q3'
import AppFooter1 from '../components/footer1'

export default {
  name: 'Home',
  components: {
    AppHeading,
    AppComponent5,
    AppModshowcase2,
    FAQ3,
    AppFooter1,
  },
  head: {
    title: 'OHD Open-Source Modding Community',
    meta: [
      {
        property: 'og:title',
        content: 'OHD Open-Source Modding Community',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  display: flex;
  overflow: hidden;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-color: #000000;
}
.home-hero {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  align-items: center;
  padding-left: var(--dl-space-space-fiveunits);
  flex-direction: column;
  justify-content: flex-start;
}
.home-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}
.home-n-v-container {
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
.home-navbar {
  width: 100%;
  display: flex;
  z-index: 1000;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: center;
  justify-content: space-between;
}
.home-branding {
  width: 120px;
  object-fit: cover;
}
.home-navbarbtngroup {
  width: 100%;
  display: flex;
  position: relative;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
}
.home-discord {
  width: auto;
  height: auto;
  font-size: 16px;
  min-width: auto;
  align-self: center;
  font-style: normal;
  max-height: auto;
  text-align: center;
  font-weight: 700;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  margin-right: var(--dl-space-space-twounits);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
  background-color: transparent;
}
.home-git-hub {
  width: auto;
  height: auto;
  font-size: 16px;
  min-width: auto;
  font-style: normal;
  max-height: auto;
  text-align: center;
  font-weight: 700;
  padding-top: var(--dl-space-space-unit);
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
  background-color: transparent;
}
@media(max-width: 1600px) {
  .home-hero {
    padding-left: 0px;
  }
  .home-container1 {
    width: 100%;
  }
  .home-n-v-container {
    width: 100%;
    align-items: flex-start;
    flex-direction: row;
    justify-content: center;
  }
  .home-navbar {
    width: 100%;
    margin-left: var(--dl-space-space-twounits);
  }
  .home-navbarbtngroup {
    align-self: center;
    align-items: center;
    margin-right: 5%;
    flex-direction: row;
    justify-content: flex-end;
  }
  .home-discord {
    max-height: auto;
    padding-top: var(--dl-space-space-unit);
    background-color: transparent;
  }
  .home-git-hub {
    max-height: auto;
    padding-top: var(--dl-space-space-unit);
    background-color: transparent;
  }
}
@media(max-width: 1200px) {
  .home-n-v-container {
    width: 100%;
  }
  .home-navbar {
    width: 100%;
    max-width: auto;
    margin-left: var(--dl-space-space-twounits);
    justify-content: flex-start;
  }
  .home-navbarbtngroup {
    width: 60%;
    margin-right: 0px;
    justify-content: flex-end;
  }
  .home-discord {
    margin-top: var(--dl-space-space-unit);
    margin-bottom: var(--dl-space-space-unit);
  }
}
@media(max-width: 991px) {
  .home-hero {
    padding-left: var(--dl-space-space-oneandhalfunits);
  }
  .home-n-v-container {
    width: 100%;
    justify-content: flex-start;
  }
  .home-navbar {
    width: 100%;
    max-width: auto;
    align-self: center;
    align-items: center;
    margin-right: 0px;
    justify-content: flex-start;
  }
  .home-navbarbtngroup {
    width: auto;
    max-width: auto;
    min-width: auto;
    align-self: center;
    justify-content: center;
  }
}
@media(max-width: 767px) {
  .home-n-v-container {
    width: 100%;
  }
  .home-navbar {
    width: 100%;
  }
  .home-navbarbtngroup {
    display: none;
  }
}
@media(max-width: 479px) {
  .home-hero {
    padding-left: 0px;
  }
  .home-navbar {
    width: 479px;
    max-width: 100%;
    align-self: center;
    flex-direction: column;
    justify-content: center;
  }
  .home-navbarbtngroup {
    width: 100%;
    display: none;
    border-color: var(--dl-color-gray-black);
    border-width: 1px;
    justify-content: center;
  }
  .home-discord {
    width: 101px;
    height: 48px;
    font-size: 12px;
    padding-top: var(--dl-space-space-unit);
  }
  .home-git-hub {
    width: 41px;
    height: 0px;
    font-size: 9px;
  }
}
</style>
