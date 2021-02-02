<template>
  <div>
    <div class="carousel" id="landing">
      <div class="overlay">
        <!-- text carousel -->
        <div
          class="textBG white--text px-1 px-sm-10 px-md-16 d-flex align-center"
        >
          <LandingText001 v-if="currentIndex === 1" class="caroTxt" />
          <LandingText002 v-if="currentIndex === 2" class="caroTxt" />
          <LandingText003 v-if="currentIndex === 3" class="caroTxt" />
          <LandingText004 v-if="currentIndex === 4" class="caroTxt" />
        </div>
      </div>
      <!-- background carousel -->
      <client-only>
        <agile
          :nav-buttons="false"
          :autoplay-speed="9000"
          fade
          :speed="1500"
          :pause-on-hover="false"
          autoplay
          :rtl="isRTL"
          @before-change="setCurrentIndex"
        >
          <v-img
            class="slide"
            v-for="(img, index) in items"
            :src="img.src"
            :key="index"
            eager
          >
          </v-img>
        </agile>
      </client-only>
    </div>
  </div>
</template>

<script>
import LandingText001 from '~/components/homePage/landingText/LandingText001.vue'
import LandingText002 from '~/components/homePage/landingText/LandingText002.vue'
import LandingText003 from '~/components/homePage/landingText/LandingText003.vue'
import LandingText004 from '~/components/homePage/landingText/LandingText004.vue'
export default {
  data() {
    return {
      items: [
        {
          src:
            'https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/homePage/010_sacIGXeysk.jpg',
        },
        {
          src:
            'https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/homePage/001_wd3xq_xwUc.jpg',
        },
        {
          src:
            'https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/homePage/002_DMWthkSiO.jpg',
        },
        {
          src:
            'https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/homePage/005_hiZpbkWNK.jpg',
        },
      ],
      isRTL: false,
      currentIndex: 1,
    }
  },
  methods: {
    setCurrentIndex() {
      if (this.currentIndex === 4) {
        this.currentIndex = 0
      }
      this.currentIndex += 1
    },
  },
  mounted() {
    this.$watch(
      '$i18n.locale',
      (newLocale) => {
        if (newLocale === 'en') {
          this.isRTL = false
        } else if (newLocale === 'ar') {
          this.isRTL = true
        }
      },
      { immediate: true }
    )
  },
  components: {
    LandingText001,
    LandingText002,
    LandingText003,
    LandingText004,
  },
}
</script>

<style lang="scss" scoped>
.carousel {
  position: relative;
  z-index: 2;
  height: 100vh;
  width: 100%;
  .overlay {
    height: 100vh;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 4;
    .textBG {
      height: 100vh;
      width: 100%;
      z-index: 6;
      .caroTxt {
        z-index: 7;
      }
      .additionalOverlay {
        height: 100vh;
        width: 100vw;
        z-index: 5;
        background-color: rgba(0, 0, 0, 0.9);
      }
    }
  }
  .slide {
    height: 100vh;
    width: 100%;
    z-index: 3;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>
