<template>
  <div class="clientsCount">
    <h3
      style="height: 100%"
      :style="
        $i18n.locale == 'en'
          ? 'font-family: Montserrat!important;'
          : 'font-family: Almarai!important;'
      "
      class="white--text text-h5 text-md-h4 d-flex justify-center align-center font-weight-bold animateCCount"
    >
      {{ theText }}+ {{ $t('home.count.body') }}
    </h3>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
export default {
  data() {
    return {
      theText: 500,
    }
  },
  methods: {
    startAnimation() {
      gsap.to('.animateCCount', {
        scrollTrigger: {
          trigger: '.animateCCount',
          start: 'top center',
          // toggleActions: 'restart none none none',
          onEnter: ({ isActive }) => {
            if (isActive) {
              this.counter()
            }
          },
        },
      })
    },
    counter() {
      let counter = 0
      const interval = setInterval(() => {
        if (counter >= 500) {
          clearInterval(interval)
        } else {
          counter += 10
          this.theText = counter
        }
      }, 20)
    },
  },
  mounted() {
    this.startAnimation()
  },
}
</script>

<style Modules>
.clientsCount {
  height: 110px;
  background-color: #f8bbd0;
}
@media screen and (max-width: 960px) {
  .clientsCount {
    height: 90px;
  }
}
</style>
