<template>
  <div class="px-5 px-md-16">
    <transition
      :css="false"
      @before-enter="beforeEnterTitle"
      @enter="enteredTitle"
      appear
    >
      <h1
        class="pb-5 pb-md-12 font-weight-medium text-h4 text-sm-h2 text-md-h1"
        :style="
          $i18n.locale == 'en'
            ? 'font-family: Montserrat!important'
            : 'font-family: Almarai!important'
        "
      >
        {{ $t('heading.fourth.title') }}
      </h1>
    </transition>
    <transition
      :css="false"
      @before-enter="beforeEnterM1"
      @enter="enteredM1"
      appear
    >
      <p class="text-h6 text-sm-h5 text-md-h4 font-weight-light">
        {{ $t('heading.fourth.message') }}
      </p>
    </transition>
  </div>
</template>

<script>
import { gsap } from 'gsap'
export default {
  methods: {
    beforeEnterIntro(el) {
      el.style.opacity = 0
      el.style.transform = 'scale(0,0)'
    },
    enteredIntro(el, done) {
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        delay: 1,
        duration: 1,
        ease: 'slow',
        onComplete: done,
      })
    },
    beforeEnterTitle(el) {
      el.style.opacity = 0
      el.style.transform = 'scale(0,0)'
    },
    enteredTitle(el, done) {
      gsap.to(el, {
        opacity: 1,
        scale: 1,
        delay: 2,
        duration: 1.5,
        ease: 'circ',
        onComplete: done,
      })
    },
    beforeEnterM1(el) {
      el.style.transform = 'translateY(100px)'
      el.style.opacity = 0
    },
    enteredM1(el, done) {
      gsap.to(el, {
        opacity: 1,
        translateY: '0',
        delay: 3.5,
        duration: 1.5,
        ease: 'power1',
        onComplete: done,
      })
    },
    beforeEnterM2(el) {
      el.style.transform = 'translateY(100px)'
      el.style.opacity = 0
    },
    enteredM2(el, done) {
      gsap.to(el, {
        opacity: 1,
        translateY: '0',
        delay: 4.5,
        duration: 1.5,
        ease: 'power1',
        onComplete: done,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.myText {
  color: #d42532;
}
</style>
