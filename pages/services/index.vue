<template>
  <div>
    <Navbar style="z-index: 99" />
    <v-container class="mx-xl-16 px-xl-16">
      <v-row style="margin-top: 100px" class="mx-xl-16 px-xl-16">
        <v-col cols="12">
          <h2
            class="px-2 py-1 py-md-5 font-weight-bold text-h4 text-sm-h3 text-md-h2"
            :style="
              $i18n.locale == 'en'
                ? 'font-family: Montserrat!important; color: #d42532'
                : 'font-family: Almarai!important; color: #d42532'
            "
          >
            {{ $t('home.services.title') }}
          </h2>
        </v-col>
        <v-col cols="12" md="6" class="pa-3 pa-xl-5">
          <the-construction />
        </v-col>
        <v-col cols="12" md="6" class="pa-3 pa-xl-5">
          <facility-mgmt />
        </v-col>
        <v-col cols="12" md="6" class="pa-3 pa-xl-5">
          <the-electrical />
        </v-col>
        <v-col cols="12" md="6" class="pa-3 pa-xl-5">
          <the-mechanical />
        </v-col>
        <v-col cols="12" md="6" class="pa-3 pa-xl-5">
          <the-landscaping />
        </v-col>
        <v-col cols="12" md="6" class="pa-3 pa-xl-5">
          <the-pool />
        </v-col>
      </v-row>
    </v-container>
    <lets-work />
  </div>
</template>

<script>
import LetsWork from '~/components/homePage/LetsWork.vue'
import Navbar from '~/components/Navbar.vue'
import FacilityMGMT from '~/components/servicesPage/FacilityMGMT.vue'
import TheConstruction from '~/components/servicesPage/TheConstruction.vue'
import TheElectrical from '~/components/servicesPage/TheElectrical.vue'
import TheLandscaping from '~/components/servicesPage/TheLandscaping.vue'
import TheMechanical from '~/components/servicesPage/TheMechanical.vue'
import ThePool from '~/components/servicesPage/ThePool.vue'
export default {
  components: {
    Navbar,
    FacilityMGMT,
    LetsWork,
    TheLandscaping,
    TheConstruction,
    TheElectrical,
    ThePool,
    TheMechanical,
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.$nuxt.$loading.start()
    //   setTimeout(() => {
    //     this.$nuxt.$loading.finish()
    //   }, 500)
    // })
  },
}
</script>

<style></style>
