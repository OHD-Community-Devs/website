<template>
  <div class="footer-footer">
    <div class="footer-content">
      <div class="footer-branding">
        <span class="footer-text">
          <span class="footer-text1">
            This is a community ran website for OHD modders.
          </span>
          <br />
        </span>
      </div>
      <div class="footer-main">
        <div class="footer-links">
          <div class="footer-column">
            <div class="footer-list">
              <a :href="link_text" class="footer-link">{{ text }}</a>
              <a
                href="mailto:support@ohdmodding.dev?subject="
                class="footer-link1"
              >
                {{ text1 }}
              </a>
              <router-link to="/privacy-policy" class="footer-navlink">
                {{ text2 }}
              </router-link>
              <router-link to="/" class="footer-navlink1">
                <span class="footer-text3">Join Our Discord</span>
                <br />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    link_text: {
      type: String,
      default: 'https://wiki.ohdmodding.dev',
    },
    text1: {
      type: String,
      default: 'Contact Us',
    },
    text: {
      type: String,
      default: 'Wiki',
    },
    text2: {
      type: String,
      default: 'Privacy Policy',
    },
  },
}
</script>

<style scoped>
.footer-footer {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  padding-left: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-fiveunits);
  flex-direction: column;
}
.footer-content {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  display: flex;
  align-self: flex-start;
  align-items: center;
  padding-top: var(--dl-space-space-fiveunits);
  border-color: #313133;
  flex-direction: column;
  padding-bottom: var(--dl-space-space-fiveunits);
  border-top-width: 1px;
}
.footer-branding {
  gap: var(--dl-space-space-twounits);
  width: 400px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-text {
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 24px;
}
.footer-main {
  gap: 240px;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.footer-links {
  gap: 120px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.footer-column {
  gap: var(--dl-space-space-threeunits);
  color: white;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer-list {
  width: 298px;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.footer-link {
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  line-height: 32px;
  text-decoration: none;
}
.footer-link:hover {
  opacity: .5;
}
.footer-link1 {
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  line-height: 32px;
  text-decoration: none;
}
.footer-link1:hover {
  opacity: .5;
}
.footer-navlink {
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  line-height: 32px;
  text-decoration: none;
}
.footer-navlink:hover {
  opacity: .5;
}
.footer-navlink1 {
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  line-height: 32px;
  text-decoration: none;
}
.footer-navlink1:hover {
  opacity: .5;
}
.footer-text3:hover {
  opacity: .5;
}
@media(max-width: 1600px) {
  .footer-text {
    color: rgb(255, 255, 255);
    line-height: 24px;
  }
  .footer-text1 {
    color: rgb(255, 255, 255);
    line-height: 24px;
  }
}
@media(max-width: 991px) {
  .footer-content {
    border-top-width: 0px;
  }
  .footer-branding {
    width: 100%;
  }
  .footer-main {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
}
@media(max-width: 767px) {
  .footer-footer {
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .footer-links {
    gap: var(--dl-space-space-fiveunits);
    flex-direction: row;
  }
}
@media(max-width: 479px) {
  .footer-text {
    color: rgb(255, 255, 255);
    align-self: center;
    text-align: center;
    line-height: 24px;
  }
  .footer-text1 {
    color: rgb(255, 255, 255);
    align-self: center;
    text-align: center;
    line-height: 24px;
  }
  .footer-main {
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .footer-links {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .footer-list {
    width: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .footer-link {
    font-size: 16px;
    line-height: 32px;
    text-decoration: none;
  }
  .footer-link1 {
    line-height: 32px;
  }
  .footer-navlink {
    font-size: 16px;
    line-height: 32px;
    text-decoration: none;
  }
  .footer-navlink1 {
    line-height: 32px;
  }
}
</style>
