<template>
  <section class="news-news" v-bind:class="rootClassName">
    <div class="news-previous banner-smaller banner"></div>
    <div class="banner news-current">
      <div class="news-controls swiper-pagination">
        <span
          role="button"
          tabindex="0"
          aria-label="Go to slide 1"
          class="swiper-pagination-bullet"
        ></span>
        <span
          role="button"
          tabindex="0"
          aria-label="Go to slide 2"
          class="swiper-pagination-bullet-active swiper-pagination-bullet"
        ></span>
        <span
          role="button"
          tabindex="0"
          aria-label="Go to slide 3"
          class="swiper-pagination-bullet"
        ></span>
        <span
          role="button"
          tabindex="0"
          aria-label="Go to slide 4"
          class="swiper-pagination-bullet"
        ></span>
        <span
          role="button"
          tabindex="0"
          aria-label="Go to slide 5"
          class="swiper-pagination-bullet"
        ></span>
      </div>
    </div>
    <div class="news-next banner-smaller banner"></div>
  </section>
</template>

<script>
export default {
  name: 'News',
  props: {
    rootClassName: String,
  },
}
</script>

<style scoped>
.news-news {
  gap: var(--dl-space-space-threeunits);
  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  padding-top: var(--dl-space-space-sixunits);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-threeunits);
  background-color: #f4f6f9;
}
.news-previous {
  background-image: url("https://play.teleporthq.io/static/svg/default-img.svg");
}
.news-controls {
  display: none;
}
.news-next {
  background-image: url("https://play.teleporthq.io/static/svg/default-img.svg");
}
@media(max-width: 991px) {
  .news-previous {
    display: none;
  }
  .news-current {
    height: 350px;
    align-items: center;
    justify-content: flex-end;
  }
  .news-controls {
    gap: var(--dl-space-space-halfunit);
    display: flex;
    padding-bottom: var(--dl-space-space-unit);
  }
  .news-next {
    display: none;
  }
}
</style>
