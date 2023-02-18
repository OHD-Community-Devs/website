<template>
  <section class="f-a-q-f-a-q">
    <div class="f-a-q-header"><h2 class="f-a-q-heading">{{ Heading }}</h2></div>
    <div class="f-a-q-content">
      <div class="f-a-q-column">
        <div class="f-a-q-element">
          <h3 class="f-a-q-header1">{{ Header }}</h3>
          <p class="f-a-q-content1">{{ Content }}</p>
        </div>
        <div class="f-a-q-element1">
          <h3 class="f-a-q-header2">{{ Header1 }}</h3>
          <p class="f-a-q-content2">
            <span>Yes we do! </span>
            <a
              href="https://discord.gg/HW7czZnA7p"
              target="_blank"
              rel="noreferrer noopener"
              class="f-a-q-link"
            >
              https://discord.gg/HW7czZnA7p
            </a>
          </p>
        </div>
        <div class="f-a-q-element2">
          <h3 class="f-a-q-header3">{{ Header2 }}</h3>
          <p class="f-a-q-content3">
            <span class="f-a-q-text1">
              We do not utilize a ads or any form of invasive tracking cookies,
              all our web services are free and open to the community to submit
              improvements or suggestions. If you are interested you can read our
              privacy policy or check out our security page. 
            </span>
            <br />
            <br />
          </p>
        </div>
      </div>
      <div class="f-a-q-column1">
        <div class="f-a-q-element3">
          <h3 class="f-a-q-header4">{{ Header3 }}</h3>
          <p class="f-a-q-content4">{{ Content1 }}</p>
        </div>
        <div class="f-a-q-element4">
          <h3 class="f-a-q-header5">{{ Header4 }}</h3>
          <p class="f-a-q-content5">{{ Content2 }}</p>
        </div>
        <div class="f-a-q-element5">
          <h3 class="f-a-q-header6">{{ Header5 }}</h3>
          <p class="f-a-q-content6">{{ Content3 }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQ',
  props: {
    Heading: {
      type: String,
      default: 'FAQ',
    },
    Content: {
      type: String,
      default:
        "This is a Operation Harsh Doorstop Community Developer Website, intended to help the Operation Harsh Doorstep modding community with community ran wiki's, tools and services for free.",
    },
    Header4: {
      type: String,
      default: 'Can I contribute to your website?',
    },
    Header5: {
      type: String,
      default: 'How do I report issues?',
    },
    Header3: {
      type: String,
      default: 'What kind of services do you offer for modders?',
    },
    Content1: {
      type: String,
      default:
        'We will eventually be offering game servers to developers to test their mods and also many more services to help aid in your modding process.',
    },
    Header1: {
      type: String,
      default: 'Do you have a Discord?',
    },
    Content2: {
      type: String,
      default:
        'This website is for the community and I would greatly appreciate any help in making improvements or additions. More Info on our GitHub.',
    },
    Header: {
      type: String,
      default: 'What is this website?',
    },
    Content3: {
      type: String,
      default:
        'If you have a issue or want to report content, you can reach us at anytime at support@ohdmodding.dev',
    },
    Header2: {
      type: String,
      default: 'How do you ran the website?',
    },
  },
}
</script>

<style scoped>
.f-a-q-f-a-q {
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
.f-a-q-header {
  gap: var(--dl-space-space-oneandhalfunits);
  display: flex;
  position: relative;
  align-self: center;
  align-items: flex-start;
  flex-direction: row;
}
.f-a-q-heading {
  color: rgb(239, 91, 39);
  font-size: 60px;
  align-self: flex-start;
  font-style: normal;
  text-align: left;
  font-weight: 400;
}
.f-a-q-content {
  gap: 120px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: flex-start;
}
.f-a-q-column {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  display: flex;
  max-width: 640px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.f-a-q-element {
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
.f-a-q-header1 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.f-a-q-content1 {
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  max-width: 560px;
  line-height: 24px;
}
.f-a-q-element1 {
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
.f-a-q-header2 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.f-a-q-content2 {
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  max-width: 560px;
  line-height: 24px;
}
.f-a-q-link {
  text-decoration: underline;
}
.f-a-q-element2 {
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
.f-a-q-header3 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.f-a-q-content3 {
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  max-width: 560px;
  line-height: 24px;
}
.f-a-q-column1 {
  gap: var(--dl-space-space-fiveunits);
  width: 100%;
  display: flex;
  max-width: 640px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
}
.f-a-q-element3 {
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
.f-a-q-header4 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.f-a-q-content4 {
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  max-width: 560px;
  line-height: 24px;
}
.f-a-q-element4 {
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
.f-a-q-header5 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.f-a-q-content5 {
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  max-width: 560px;
  line-height: 24px;
}
.f-a-q-element5 {
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
.f-a-q-header6 {
  color: rgb(255, 255, 255);
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}
.f-a-q-content6 {
  color: rgb(255, 255, 255);
  width: 100%;
  display: flex;
  max-width: 560px;
  line-height: 24px;
}
@media(max-width: 1600px) {
  .f-a-q-content2 {
    color: rgb(255, 255, 255);
  }
  .f-a-q-link {
    text-decoration: underline;
  }
}
@media(max-width: 991px) {
  .f-a-q-f-a-q {
    padding-bottom: var(--dl-space-space-fiveunits);
  }
  .f-a-q-content {
    gap: var(--dl-space-space-oneandhalfunits);
    flex-direction: column;
    justify-content: flex-start;
  }
  .f-a-q-column {
    max-width: 100%;
  }
  .f-a-q-header1 {
    font-size: 24px;
  }
  .f-a-q-content1 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q-header2 {
    font-size: 24px;
  }
  .f-a-q-content2 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q-header3 {
    font-size: 24px;
  }
  .f-a-q-content3 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q-text1 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q-column1 {
    max-width: 100%;
  }
  .f-a-q-header4 {
    font-size: 24px;
  }
  .f-a-q-content4 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q-header5 {
    font-size: 24px;
  }
  .f-a-q-content5 {
    font-size: 14px;
    line-height: 21px;
  }
  .f-a-q-header6 {
    font-size: 24px;
  }
  .f-a-q-content6 {
    font-size: 14px;
    line-height: 21px;
  }
}
@media(max-width: 767px) {
  .f-a-q-f-a-q {
    gap: var(--dl-space-space-threeunits);
    padding-top: var(--dl-space-space-threeunits);
    padding-left: var(--dl-space-space-oneandhalfunits);
    padding-right: var(--dl-space-space-oneandhalfunits);
    padding-bottom: var(--dl-space-space-threeunits);
  }
  .f-a-q-header {
    gap: var(--dl-space-space-unit);
    align-items: center;
  }
  .f-a-q-heading {
    font-size: 36px;
  }
  .f-a-q-column {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .f-a-q-element {
    gap: var(--dl-space-space-halfunit);
    padding-top: 0px;
    padding-right: 00px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    border-right-width: 0px;
  }
  .f-a-q-header1 {
    font-size: 16px;
    line-height: 20px;
  }
  .f-a-q-element1 {
    gap: var(--dl-space-space-halfunit);
    padding-top: 0px;
    padding-right: 00px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    border-right-width: 0px;
  }
  .f-a-q-header2 {
    font-size: 16px;
    line-height: 20px;
  }
  .f-a-q-element2 {
    gap: var(--dl-space-space-halfunit);
    padding-top: 0px;
    padding-right: 00px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    border-right-width: 0px;
  }
  .f-a-q-header3 {
    font-size: 16px;
    line-height: 20px;
  }
  .f-a-q-column1 {
    gap: var(--dl-space-space-oneandhalfunits);
  }
  .f-a-q-element3 {
    gap: var(--dl-space-space-halfunit);
    padding-top: 0px;
    padding-right: 00px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    border-right-width: 0px;
  }
  .f-a-q-header4 {
    font-size: 16px;
    line-height: 20px;
  }
  .f-a-q-element4 {
    gap: var(--dl-space-space-halfunit);
    padding-top: 0px;
    padding-right: 00px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    border-right-width: 0px;
  }
  .f-a-q-header5 {
    font-size: 16px;
    line-height: 20px;
  }
  .f-a-q-element5 {
    gap: var(--dl-space-space-halfunit);
    padding-top: 0px;
    padding-right: 00px;
    padding-bottom: var(--dl-space-space-oneandhalfunits);
    border-right-width: 0px;
  }
  .f-a-q-header6 {
    font-size: 16px;
    line-height: 20px;
  }
}
@media(max-width: 479px) {
  .f-a-q-header {
    gap: 0px;
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
