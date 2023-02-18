<template>
  <section class="f-a-q3-f-a-q">
    <div class="f-a-q3-header">
      <h2 class="f-a-q3-heading">{{ Heading }}</h2>
    </div>
    <div class="f-a-q3-content">
      <div class="f-a-q3-column">
        <div class="f-a-q3-whatisthis">
          <h3 class="f-a-q3-header1">{{ Header }}</h3>
          <p class="f-a-q3-content1">
            <span>
              This is an Operation Harsh Doorstop community ran website,
              intended to help the Operation Harsh Doorstep modding community
              with our wiki&apos;s, tools and services which are provided
              <span>{{ raw5vbm }}</span>
            </span>
            <span class="f-a-q3-text01">completely free.</span>
          </p>
        </div>
        <div class="f-a-q3-discord">
          <h3 class="f-a-q3-header2">{{ Header1 }}</h3>
          <p class="f-a-q3-content2">
            <span>Yes we do!</span>
            <a
              href="https://discord.gg/HW7czZnA7p"
              target="_blank"
              rel="noreferrer noopener"
              class="f-a-q3-link"
            >
              https://discord.gg/HW7czZnA7p
            </a>
          </p>
        </div>
        <div class="f-a-q3-howdoyouoperate">
          <h3 class="f-a-q3-header3">{{ Header2 }}</h3>
          <p class="f-a-q3-content3">
            <span class="f-a-q3-text03">
              This is not a official Operation Harsh Doorstop Website, it is ran
              on a Open-Source GitHub Repository that anyone can access and view
              the code, and also freely submit improvements or additions.
            </span>
            <br class="f-a-q3-text04" />
            <span class="f-a-q3-text05">
              We will not monetize this website, we do not utilize ads or any
              form of invasive tracking cookies, our tools, mods and wiki are
              free and open to the community.
            </span>
          </p>
        </div>
      </div>
      <div class="f-a-q3-column1">
        <div class="f-a-q3-whatdoyouoffer">
          <h3 class="f-a-q3-header4">{{ Header3 }}</h3>
          <p class="f-a-q3-content4">{{ Content }}</p>
        </div>
        <div class="f-a-q3-contribute">
          <h3 class="f-a-q3-header5">{{ Header4 }}</h3>
          <p class="f-a-q3-content5">
            <span>
              This website is for the community, developed by the community.
              Check out the source code:
            </span>
            <br />
            <a
              href="https://github.com/OHD-Community-Devs/website"
              target="_blank"
              rel="noreferrer noopener"
              class="f-a-q3-link1"
            >
              GitHub Repository
            </a>
          </p>
        </div>
        <div class="f-a-q3-reporting">
          <h3 class="f-a-q3-header6">{{ Header5 }}</h3>
          <p class="f-a-q3-content6">
            <span class="f-a-q3-text08">
              If you have an issue or want to report content, you can reach us
              at anytime at:
            </span>
            <br class="f-a-q3-text09" />
            <span class="f-a-q3-text10">support@ohdmodding.dev</span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQ3',
  props: {
    Heading: {
      type: String,
      default: 'FAQ'
    },
    Header: {
      type: String,
      default: 'What is this website?'
    },
    Header1: {
      type: String,
      default: 'Do you have a Discord?'
    },
    Header2: {
      type: String,
      default: 'How do you run the website?'
    },
    Header3: {
      type: String,
      default: 'What do you offer for modders?'
    },
    Content: {
      type: String,
      default:
        'We will eventually be offering a variety of free open-source tools to aid in your mod development, server management and much more. Our goal is to help create mod templates and lay the foundation for inexperienced modders.'
    },
    Header4: {
      type: String,
      default: 'Can I contribute to your website?'
    },
    Header5: {
      type: String,
      default: 'How do I report issues?'
    }
  },
  data () {
    return {
      raw5vbm: ' '
    }
  }
}
</script>

<style scoped>
.f-a-q3-f-a-q {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  display: flex;
  position: relative;
  max-width: var(--dl-size-size-maxwidth);
  align-items: flex-start;
  padding-top: var(--dl-space-space-fiveunits);
  padding-left: var(--dl-space-space-fiveunits);
  padding-right: var(--dl-space-space-fiveunits);
  flex-direction: column;
  padding-bottom: 160px;
}
.f-a-q3-header {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  position: relative;
  align-self: center;
  align-items: flex-end;
  flex-direction: row;
  justify-content: center;
}
.f-a-q3-heading {
  color: rgb(239, 91, 39);
  font-size: 60px;
  align-self: flex-start;
  font-style: normal;
  text-align: left;
  font-weight: 400;
}
.f-a-q3-content {
  gap: 120px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.f-a-q3-column {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  display: flex;
  max-width: 640px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.f-a-q3-whatisthis {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  border-color: #313133;
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: flex-start;
  border-right-width: 1px;
  border-bottom-width: 1px;
}
.f-a-q3-header1 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.f-a-q3-content1 {
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  max-width: 560px;
  line-height: 24px;
  flex-direction: column;
}
.f-a-q3-text01 {
  font-style: normal;
  font-weight: 700;
}
.f-a-q3-discord {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  border-color: #313133;
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: flex-start;
  border-right-width: 1px;
  border-bottom-width: 1px;
}
.f-a-q3-header2 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.f-a-q3-content2 {
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  max-width: 560px;
  line-height: 24px;
}
.f-a-q3-link {
  text-decoration: underline;
}
.f-a-q3-howdoyouoperate {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  border-color: #313133;
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: flex-start;
  border-right-width: 1px;
  border-bottom-width: 1px;
}
.f-a-q3-header3 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.f-a-q3-content3 {
  color: rgb(255, 255, 255);
  width: 100%;
  height: auto;
  display: flex;
  max-width: auto;
  align-self: flex-start;
  text-align: left;
  align-items: flex-start;
  line-height: 24px;
  flex-direction: column;
  justify-content: flex-start;
}
.f-a-q3-column1 {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  display: flex;
  max-width: 640px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.f-a-q3-whatdoyouoffer {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  border-color: #313133;
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: flex-start;
  border-right-width: 1px;
  border-bottom-width: 1px;
}
.f-a-q3-header4 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.f-a-q3-content4 {
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  max-width: 560px;
  align-items: flex-start;
  line-height: 24px;
  flex-direction: column;
}
.f-a-q3-contribute {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  border-color: #313133;
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: flex-start;
  border-right-width: 1px;
  border-bottom-width: 1px;
}
.f-a-q3-header5 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.f-a-q3-content5 {
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  max-width: 560px;
  line-height: 24px;
  flex-direction: column;
}
.f-a-q3-reporting {
  gap: var(--dl-space-space-oneandhalfunits);
  width: 100%;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  border-color: #313133;
  padding-right: var(--dl-space-space-threeunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-threeunits);
  justify-content: flex-start;
  border-right-width: 1px;
  border-bottom-width: 1px;
}
.f-a-q3-header6 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.f-a-q3-content6 {
  width: 100%;
  display: flex;
  max-width: 560px;
  line-height: 24px;
  flex-direction: column;
}
.f-a-q3-text08 {
  color: #ffffff;
}
.f-a-q3-text09 {
  color: #ffffff;
}
.f-a-q3-text10 {
  color: #e4a300;
}
@media (max-width: 1600px) {
  .f-a-q3-content2 {
    color: rgb(255, 255, 255);
  }
  .f-a-q3-link {
    text-decoration: underline;
  }
  .f-a-q3-content5 {
    color: rgb(255, 255, 255);
    line-height: 24px;
  }
  .f-a-q3-link1 {
    font-style: normal;
    font-weight: 700;
    text-decoration: underline;
  }
}
@media (max-width: 991px) {
  .f-a-q3-f-a-q {
    padding-bottom: var(--dl-space-space-fiveunits);
  }
  .f-a-q3-content {
    gap: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
    justify-content: flex-start;
  }
  .f-a-q3-column {
    max-width: 100%;
  }
  .f-a-q3-header1 {
    font-size: 24px;
  }
  .f-a-q3-content1 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q3-header2 {
    font-size: 24px;
  }
  .f-a-q3-content2 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q3-header3 {
    font-size: 24px;
  }
  .f-a-q3-content3 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q3-text03 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q3-text04 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q3-text05 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q3-column1 {
    max-width: 100%;
  }
  .f-a-q3-header4 {
    font-size: 24px;
  }
  .f-a-q3-content4 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q3-header5 {
    font-size: 24px;
  }
  .f-a-q3-content5 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q3-header6 {
    font-size: 24px;
  }
  .f-a-q3-content6 {
    font-size: 14px;
    line-height: 21px;
  }
}
@media (max-width: 767px) {
  .f-a-q3-f-a-q {
    gap: var(--dl-space-space-threeunits);
    padding-top: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-threeunits);
  }
  .f-a-q3-header {
    gap: var(--dl-space-space-unit);
    align-items: center;
  }
  .f-a-q3-heading {
    font-size: 36px;
  }
  .f-a-q3-column {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .f-a-q3-whatisthis {
    gap: var(--dl-space-space-halfunit);
    padding-top: 0px;
    padding-right: 00px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    border-right-width: 0px;
  }
  .f-a-q3-header1 {
    font-size: 16px;
    line-height: 20px;
  }
  .f-a-q3-discord {
    gap: var(--dl-space-space-halfunit);
    padding-top: 0px;
    padding-right: 00px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    border-right-width: 0px;
  }
  .f-a-q3-header2 {
    font-size: 16px;
    line-height: 20px;
  }
  .f-a-q3-howdoyouoperate {
    gap: var(--dl-space-space-halfunit);
    padding-top: 0px;
    padding-right: 00px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    border-right-width: 0px;
  }
  .f-a-q3-header3 {
    font-size: 16px;
    line-height: 20px;
  }
  .f-a-q3-column1 {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .f-a-q3-whatdoyouoffer {
    gap: var(--dl-space-space-halfunit);
    padding-top: 0px;
    padding-right: 00px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    border-right-width: 0px;
  }
  .f-a-q3-header4 {
    font-size: 16px;
    line-height: 20px;
  }
  .f-a-q3-contribute {
    gap: var(--dl-space-space-halfunit);
    padding-top: 0px;
    padding-right: 00px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    border-right-width: 0px;
  }
  .f-a-q3-header5 {
    font-size: 16px;
    line-height: 20px;
  }
  .f-a-q3-reporting {
    gap: var(--dl-space-space-halfunit);
    padding-top: 0px;
    padding-right: 00px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    border-right-width: 0px;
  }
  .f-a-q3-header6 {
    font-size: 16px;
    line-height: 20px;
  }
}
@media (max-width: 479px) {
  .f-a-q3-header {
    gap: 0px;
    align-items: flex-start;
    flex-direction: column;
  }
  .f-a-q3-header1 {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-style: inherit;
    font-weight: 700;
    line-height: 20px;
  }
  .f-a-q3-header2 {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-style: inherit;
    font-weight: 700;
    line-height: 20px;
  }
  .f-a-q3-header3 {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-style: inherit;
    font-weight: 700;
    line-height: 20px;
  }
  .f-a-q3-header4 {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-style: inherit;
    font-weight: 700;
    line-height: 20px;
  }
  .f-a-q3-header5 {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-style: inherit;
    font-weight: 700;
    line-height: 20px;
  }
  .f-a-q3-header6 {
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-style: inherit;
    font-weight: 700;
    line-height: 20px;
  }
}
</style>
