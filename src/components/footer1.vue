<template>
  <div class="footer1-footer">
    <div class="footer1-content">
      <div class="footer1-branding">
        <span class="footer1-text">
          <span class="footer1-text1">
            This is a community ran website for OHD modders.
          </span>
          <br />
        </span>
      </div>
      <div class="footer1-main">
        <div class="footer1-links">
          <div class="footer1-column">
            <div class="footer1-list">
              <a :href="link_text" class="footer1-link">{{ text }}</a>
              <a
                href="mailto:support@ohdmodding.dev?subject="
                class="footer1-link1"
              >
                {{ text1 }}
              </a>
              <router-link to="/privacy-policy" class="footer1-navlink">
                {{ text2 }}
              </router-link>
              <router-link to="/" class="footer1-navlink1">
                <span class="footer1-text3">Join Our Discord</span>
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
  name: 'Footer1',
  props: {
    text: {
      type: String,
      default: 'Wiki',
    },
    link_text: {
      type: String,
      default: 'https://wiki.ohdmodding.dev',
    },
    text1: {
      type: String,
      default: 'Contact Us',
    },
    text2: {
      type: String,
      default: 'Privacy Policy',
    },
  },
}
</script>

<style scoped>
.footer1-footer {
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  padding-left: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-fiveunits);
  flex-direction: column;
}
.footer1-content {
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
.footer1-branding {
  gap: var(--dl-space-space-twounits);
  width: 400px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer1-text {
  color: rgb(255, 255, 255);
  text-align: center;
  line-height: 24px;
}
.footer1-main {
  gap: 240px;
  width: 100%;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.footer1-links {
  gap: 120px;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.footer1-column {
  gap: var(--dl-space-space-threeunits);
  color: white;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.footer1-list {
  width: 298px;
  display: flex;
  align-self: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.footer1-link {
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  line-height: 32px;
  text-decoration: none;
}
.footer1-link:hover {
  opacity: .5;
}
.footer1-link1 {
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  line-height: 32px;
  text-decoration: none;
}
.footer1-link1:hover {
  opacity: .5;
}
.footer1-navlink {
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  line-height: 32px;
  text-decoration: none;
}
.footer1-navlink:hover {
  opacity: .5;
}
.footer1-navlink1 {
  cursor: pointer;
  font-size: 16px;
  transition: 0.3s;
  line-height: 32px;
  text-decoration: none;
}
.footer1-navlink1:hover {
  opacity: .5;
}
.footer1-text3:hover {
  opacity: .5;
}
@media(max-width: 1600px) {
  .footer1-text {
    color: rgb(255, 255, 255);
    line-height: 24px;
  }
  .footer1-text1 {
    color: rgb(255, 255, 255);
    line-height: 24px;
  }
}
@media(max-width: 991px) {
  .footer1-content {
    border-top-width: 0px;
  }
  .footer1-branding {
    width: 100%;
  }
  .footer1-main {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
}
@media(max-width: 767px) {
  .footer1-footer {
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
  }
  .footer1-links {
    gap: var(--dl-space-space-fiveunits);
    flex-direction: row;
  }
}
@media(max-width: 479px) {
  .footer1-text {
    color: rgb(255, 255, 255);
    align-self: center;
    text-align: center;
    line-height: 24px;
  }
  .footer1-text1 {
    color: rgb(255, 255, 255);
    align-self: center;
    text-align: center;
    line-height: 24px;
  }
  .footer1-main {
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .footer1-links {
    gap: var(--dl-space-space-threeunits);
    flex-direction: column;
  }
  .footer1-list {
    width: 100%;
    align-self: center;
    align-items: center;
    justify-content: center;
  }
  .footer1-link {
    font-size: 16px;
    line-height: 32px;
    text-decoration: none;
  }
  .footer1-link1 {
    line-height: 32px;
  }
  .footer1-navlink {
    font-size: 16px;
    line-height: 32px;
    text-decoration: none;
  }
  .footer1-navlink1 {
    line-height: 32px;
  }
}
</style>
