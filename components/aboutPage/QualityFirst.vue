<template>
  <div class="letsWork">
    <h3
      style="height: 100%"
      :style="
        $i18n.locale == 'en'
          ? 'font-family: Montserrat!important;'
          : 'font-family: Almarai!important;'
      "
      class="white--text text-h5 text-md-h4 d-flex justify-center align-center font-weight-bold animateLetsWork"
    ></h3>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger)
export default {
  computed: {
    theText() {
      return this.$t('about.lets.body')
    },
  },
  methods: {
    startAnimation() {
      gsap.to('.animateLetsWork', {
        text: this.theText,
        duration: 0.8,
        scrollTrigger: {
          trigger: '.letsWork',
          start: 'top 75%',
          toggleActions: 'restart none none none',
        },
      })
    },
  },
  mounted() {
    this.startAnimation()
  },
}
</script>

<style Modules>
.letsWork {
  height: 110px;
  background-color: #f8bbd0;
}
@media screen and (max-width: 960px) {
  .letsWork {
    height: 90px;
  }
}
</style>
