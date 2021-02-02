<template>
  <v-app-bar
    fixed
    :color="bgColor"
    elevation="3"
    class="px-0 px-md-12"
    height="80"
  >
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="blue-grey darken-3"
    >
      <v-toolbar height="80" elevation="0" class="blue-grey darken-2">
        <div class="d-flex align-center">
          <v-btn
            x-small
            text
            :ripple="false"
            tile
            color="transparent"
            :class="$i18n.locale == 'en' ? 'pl-1 pr-3' : 'pr-1 pl-3'"
          >
            <nuxt-link :to="localePath('/')">
              <v-img
                eager
                :max-width="$vuetify.breakpoint.smAndDown ? '28' : '36'"
                src="/logo.png"
              ></v-img>
            </nuxt-link>
          </v-btn>

          <v-toolbar-title :class="$i18n.locale == 'en' ? 'pt-1' : ''">
            <nuxt-link
              :to="localePath('/')"
              class="text-decoration-none text-h6 white--text"
              :style="
                $i18n.locale == 'en'
                  ? 'font-family: Montserrat!important;'
                  : 'font-family: Almarai!important'
              "
            >
              {{ $t('nav.title') }}</nuxt-link
            ></v-toolbar-title
          >
        </div>
      </v-toolbar>
      <div class="d-flex flex-column justify-center">
        <v-btn class="mt-8" :ripple="false" text color="transparent">
          <v-hover
            class="myLink text-subtitle-1 font-weight-light px-1"
            v-slot:default="{ hover }"
          >
            <nuxt-link
              :to="localePath('/')"
              class="text-decoration-none"
              :style="
                $i18n.locale == 'en'
                  ? 'font-family: Montserrat!important'
                  : 'font-family: Almarai!important'
              "
            >
              <span class="hovereffect" :class="hover ? 'hovereffect' : ''">{{
                $t('nav.home')
              }}</span></nuxt-link
            >
          </v-hover>
        </v-btn>
        <v-btn class="mt-8" :ripple="false" text color="transparent">
          <v-hover
            class="myLink text-subtitle-1 font-weight-light px-1"
            v-slot:default="{ hover }"
          >
            <a
              @click="goToSection('#servicesSection', 1)"
              class="text-decoration-none"
              :style="
                $i18n.locale == 'en'
                  ? 'font-family: Montserrat!important'
                  : 'font-family: Almarai!important'
              "
            >
              <span class="hovereffect" :class="hover ? 'hovereffect' : ''">{{
                $t('nav.services')
              }}</span></a
            >
          </v-hover>
        </v-btn>
        <v-btn class="mt-8" :ripple="false" text color="transparent">
          <v-hover
            class="myLink text-subtitle-1 font-weight-light px-1"
            v-slot:default="{ hover }"
          >
            <a
              @click="goToSection('#portfolio', 1)"
              class="text-decoration-none"
              :style="
                $i18n.locale == 'en'
                  ? 'font-family: Montserrat!important'
                  : 'font-family: Almarai!important'
              "
            >
              <span class="hovereffect" :class="hover ? 'hovereffect' : ''">{{
                $t('nav.portfolio')
              }}</span></a
            >
          </v-hover>
        </v-btn>
        <v-btn class="mt-8" :ripple="false" text color="transparent">
          <v-hover
            class="myLink text-subtitle-1 font-weight-light px-1"
            v-slot:default="{ hover }"
          >
            <nuxt-link
              :to="localePath('/about')"
              class="text-decoration-none"
              :style="
                $i18n.locale == 'en'
                  ? 'font-family: Montserrat!important'
                  : 'font-family: Almarai!important'
              "
            >
              <span class="hovereffect" :class="hover ? 'hovereffect' : ''">{{
                $t('nav.about')
              }}</span></nuxt-link
            >
          </v-hover>
        </v-btn>
        <!-- language switcher -->
        <v-btn class="mt-8" :ripple="false" text color="transparent">
          <v-hover
            class="myLink text-subtitle-1 font-weight-light px-1"
            v-slot:default="{ hover }"
          >
            <nuxt-link
              v-for="locale in availableLocales"
              :key="locale.code"
              :to="switchLocalePath(locale.code)"
              class="text-decoration-none"
              :style="
                $i18n.locale == 'en'
                  ? 'font-family: Almarai!important'
                  : 'font-family: Montserrat!important'
              "
            >
              <span class="hovereffect" :class="hover ? 'hovereffect' : ''">{{
                locale.name
              }}</span></nuxt-link
            >
          </v-hover>
        </v-btn>
      </div>
    </v-navigation-drawer>

    <v-app-bar-nav-icon
      @click.stop="drawer = !drawer"
      v-if="$vuetify.breakpoint.mdAndDown"
      class="white--text"
    ></v-app-bar-nav-icon>

    <div class="d-flex justify-center align-center">
      <div :class="$i18n.locale == 'en' ? 'pl-1 pr-3' : 'pr-1 pl-3'">
        <nuxt-link :to="localePath('/')">
          <v-img
            :max-width="$vuetify.breakpoint.smAndDown ? '28' : '36'"
            src="/logo.png"
            eager
          ></v-img>
        </nuxt-link>
      </div>

      <div>
        <nuxt-link
          :to="localePath('/')"
          class="text-decoration-none text-h5 text-md-h4 white--text"
          :style="
            $i18n.locale == 'en'
              ? 'font-family: Montserrat!important;'
              : 'font-family: Almarai!important'
          "
        >
          {{ $t('nav.title') }}</nuxt-link
        >
      </div>
    </div>

    <v-spacer></v-spacer>

    <v-toolbar-items v-if="$vuetify.breakpoint.lgAndUp">
      <v-btn
        class="px-5 px-lg-8 px-xl-10"
        :ripple="false"
        text
        color="transparent"
      >
        <v-hover
          class="myLink text-h6 font-weight-light px-1"
          v-slot:default="{ hover }"
        >
          <nuxt-link
            :to="localePath('/')"
            class="text-decoration-none"
            :style="
              $i18n.locale == 'en'
                ? 'font-family: Montserrat!important'
                : 'font-family: Almarai!important'
            "
          >
            <span class="hovereffect" :class="hover ? 'hovereffect' : ''">{{
              $t('nav.home')
            }}</span></nuxt-link
          >
        </v-hover>
      </v-btn>
      <v-btn
        class="px-5 px-lg-8 px-xl-10"
        :ripple="false"
        text
        color="transparent"
      >
        <v-hover
          class="myLink text-h6 font-weight-light px-1"
          v-slot:default="{ hover }"
        >
          <a
            @click="goToSection('#servicesSection', 1)"
            class="text-decoration-none"
            :style="
              $i18n.locale == 'en'
                ? 'font-family: Montserrat!important'
                : 'font-family: Almarai!important'
            "
          >
            <span class="hovereffect" :class="hover ? 'hovereffect' : ''">{{
              $t('nav.services')
            }}</span></a
          >
        </v-hover>
      </v-btn>
      <v-btn
        class="px-5 px-lg-8 px-xl-10"
        :ripple="false"
        text
        color="transparent"
      >
        <v-hover
          class="myLink text-h6 font-weight-light px-1"
          v-slot:default="{ hover }"
        >
          <a
            @click="goToSection('#portfolio', 1)"
            class="text-decoration-none"
            :style="
              $i18n.locale == 'en'
                ? 'font-family: Montserrat!important'
                : 'font-family: Almarai!important'
            "
          >
            <span class="hovereffect" :class="hover ? 'hovereffect' : ''">{{
              $t('nav.portfolio')
            }}</span></a
          >
        </v-hover>
      </v-btn>
      <v-btn
        class="px-5 px-lg-8 px-xl-10"
        :ripple="false"
        text
        color="transparent"
      >
        <v-hover
          class="myLink text-h6 font-weight-light px-1"
          v-slot:default="{ hover }"
        >
          <nuxt-link
            :to="localePath('/about')"
            class="text-decoration-none"
            :style="
              $i18n.locale == 'en'
                ? 'font-family: Montserrat!important'
                : 'font-family: Almarai!important'
            "
          >
            <span class="hovereffect" :class="hover ? 'hovereffect' : ''">{{
              $t('nav.about')
            }}</span></nuxt-link
          >
        </v-hover>
      </v-btn>
      <!-- language switcher -->
      <v-btn
        class="px-5 px-lg-8 px-xl-10"
        :ripple="false"
        text
        color="transparent"
      >
        <v-hover
          class="myLink text-h6 font-weight-light px-1"
          v-slot:default="{ hover }"
        >
          <nuxt-link
            v-for="locale in availableLocales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            class="text-decoration-none"
            :style="
              $i18n.locale == 'en'
                ? 'font-family: Almarai!important'
                : 'font-family: Montserrat!important'
            "
          >
            <span class="hovereffect" :class="hover ? 'hovereffect' : ''">{{
              locale.name
            }}</span></nuxt-link
          >
        </v-hover>
      </v-btn>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
// @click="goToSection('#portfolio', 1)"
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
export default {
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
    bgColor() {
      return '#424242'
    },
  },
  methods: {
    goToSection(section, customDelay) {
      if (this.$route.path == '/' || this.$route.path == '/ar') {
        gsap.registerPlugin(ScrollToPlugin)
        gsap.to(window, {
          duration: customDelay,
          scrollTo: { y: section, offsetY: 60 },
        })
      } else {
        this.$router.push(this.localePath('/'))
        setTimeout(() => {
          gsap.registerPlugin(ScrollToPlugin)
          gsap.to(window, {
            duration: customDelay,
            scrollTo: { y: section, offsetY: 60 },
          })
        }, 250)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.myLink {
  color: whitesmoke;
  text-transform: capitalize;
}
.hovereffect {
  display: inline-block;
  position: relative;
}
.hovereffect::before {
  content: '';
  position: absolute;

  width: 100%;
  transform: scale(0);
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #d42532;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
  transition-delay: 0.2s;
}
.hovereffect:hover::before {
  transform: scale(1);
  transform-origin: bottom left;
}
.selectClass {
  outline: none;
}
.logoWidth {
  width: 40px;
}
@media screen and (max-width: 1000px) {
  .logoWidth {
    width: 35px;
  }
}
@media screen and (max-width: 500px) {
  .logoWidth {
    width: 30px;
  }
}
</style>
