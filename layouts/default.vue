<template>
  <v-app>
    <div class="text-center">
      <v-overlay z-index="100" :value="loaded" color="#fff" opacity="100">
        <first-loading-spinner />
      </v-overlay>
    </div>
    <v-main>
      <nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import FirstLoadingSpinner from '~/components/spinners/FirstLoadingSpinner.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    FirstLoadingSpinner,
    Footer,
  },
  data() {
    return {
      loaded: true,
    }
  },
  beforeCreate() {
    // to make sure that the page start in the correct direction
    if (this.$i18n.locale === 'ar') {
      this.$vuetify.rtl = true
    } else {
      this.$vuetify.rtl = false
    }
  },
  mounted() {
    // show the loading spinner before starting the app
    setTimeout(() => {
      this.loaded = false
    }, 750)
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => {
    //     this.loaded = false
    //     this.$nuxt.$loading.finish()
    //   }, 1750)
    // })

    // watch the lang changes, then change the page direction
    this.$watch(
      '$i18n.locale',
      (newLocale, oldLocale) => {
        if (newLocale === oldLocale) {
          return
        } else if (newLocale === 'ar') {
          this.$vuetify.rtl = true
        } else {
          this.$vuetify.rtl = false
        }
      },
      { immediate: true }
    )
  },
}
</script>

<style lang="scss" scoped>
/*
z-index list:
  loading spinner: 100
  navbar: 99
  carousel: 2-7
  introSec: 8-9

main color: #d42532
nav color: #424242

*/
</style>
