<template>
  <v-container class="py-1 py-sm-4 pb-md-6">
    <div class="px-0 px-md-12" id="portfolio">
      <!-- section title -->

      <v-row class="pt-5 pt-md-10 pb-2 pb-md-5">
        <v-col cols="12">
          <h2
            class="text-center font-weight-bold text-h4 text-sm-h3 text-md-h2"
            :style="
              $i18n.locale == 'en'
                ? 'font-family: Montserrat!important; color:#d42532'
                : 'font-family: Almarai!important; color:#d42532'
            "
          >
            {{ $t('home.projects.title') }}
          </h2>
        </v-col>
      </v-row>
      <!-- tabs come here -->
      <div class="px-2 px-md-0 pt-0">
        <v-row>
          <v-col cols="12" md="8" offset-md="2" lg="6" offset-lg="3">
            <v-tabs
              color="#d42532"
              v-model="projects"
              background-color="transparent"
              center-active
              grow
            >
              <v-tab
                v-for="title in titles"
                :key="title"
                class="text-body-2 text-md-body-1 text-lg-h6 font-weight-medium text-capitalize"
                @click.stop="resetScrollTriggers()"
              >
                {{ title }}
              </v-tab>
            </v-tabs>
          </v-col>
        </v-row>
        <!-- projects listed here -->
        <!-- scroll trigger div -->
        <div class="sTriggerClass">
          <v-tabs-items v-model="projects">
            <v-tab-item v-for="title in titles" :key="title">
              <v-row class="py-5">
                <v-col
                  cols="6"
                  lg="4"
                  xl="3"
                  class="pa-2 pa-sm-5"
                  v-if="
                    title === 'All Projects' ||
                    title === 'Maintenance' ||
                    title === 'مشروعات الصيانة' ||
                    title === 'مشروعاتنا'
                  "
                >
                  <imam-uni />
                </v-col>
                <v-col
                  cols="6"
                  lg="4"
                  xl="3"
                  class="pa-2 pa-sm-5"
                  v-if="
                    title === 'All Projects' ||
                    title === 'Maintenance' ||
                    title === 'مشروعات الصيانة' ||
                    title === 'مشروعاتنا'
                  "
                >
                  <al-baha-uni />
                </v-col>
                <v-col
                  cols="6"
                  lg="4"
                  xl="3"
                  class="pa-2 pa-sm-5"
                  v-if="
                    title === 'All Projects' ||
                    title === 'Maintenance' ||
                    title === 'مشروعات الصيانة' ||
                    title === 'مشروعاتنا'
                  "
                >
                  <king-historical />
                </v-col>
                <v-col
                  cols="6"
                  lg="4"
                  xl="3"
                  class="pa-2 pa-sm-5"
                  v-if="
                    title === 'All Projects' ||
                    title === 'Maintenance' ||
                    title === 'مشروعات الصيانة' ||
                    title === 'مشروعاتنا'
                  "
                >
                  <national-library />
                </v-col>
                <v-col
                  cols="6"
                  lg="4"
                  xl="3"
                  class="pa-2 pa-sm-5"
                  v-if="
                    title === 'All Projects' ||
                    title === 'Construction' ||
                    title === 'مشروعاتنا' ||
                    title === 'مشروعات الإنشاءات'
                  "
                >
                  <gpyw />
                </v-col>
                <v-col
                  cols="6"
                  lg="4"
                  xl="3"
                  class="pa-2 pa-sm-5"
                  v-if="
                    title === 'All Projects' ||
                    title === 'Construction' ||
                    title === 'مشروعاتنا' ||
                    title === 'مشروعات الإنشاءات'
                  "
                >
                  <faisal-stadium />
                </v-col>
                <v-col
                  cols="6"
                  lg="4"
                  xl="3"
                  class="pa-2 pa-sm-5"
                  v-if="
                    title === 'All Projects' ||
                    title === 'Construction' ||
                    title === 'مشروعاتنا' ||
                    title === 'مشروعات الإنشاءات'
                  "
                >
                  <hajir-club />
                </v-col>
                <v-col
                  cols="6"
                  lg="4"
                  xl="3"
                  class="pa-2 pa-sm-5"
                  v-if="
                    title === 'All Projects' ||
                    title === 'Construction' ||
                    title === 'مشروعاتنا' ||
                    title === 'مشروعات الإنشاءات'
                  "
                >
                  <khalid-university />
                </v-col>
                <v-col
                  cols="6"
                  lg="4"
                  xl="3"
                  class="pa-2 pa-sm-5"
                  v-if="
                    title === 'All Projects' ||
                    title === 'Maintenance' ||
                    title === 'مشروعات الصيانة' ||
                    title === 'مشروعاتنا'
                  "
                >
                  <security-college />
                </v-col>
                <v-col
                  cols="6"
                  lg="4"
                  xl="3"
                  class="pa-2 pa-sm-5"
                  v-if="
                    title === 'All Projects' ||
                    title === 'Maintenance' ||
                    title === 'مشروعات الصيانة' ||
                    title === 'مشروعاتنا'
                  "
                >
                  <sattam-bin-abdulaziz-university />
                </v-col>
                <v-col
                  cols="6"
                  lg="4"
                  xl="3"
                  class="pa-2 pa-sm-5"
                  v-if="
                    title === 'All Projects' ||
                    title === 'Maintenance' ||
                    title === 'مشروعات الصيانة' ||
                    title === 'مشروعاتنا'
                  "
                >
                  <king-fahad-road />
                </v-col>
                <v-col
                  cols="6"
                  lg="4"
                  xl="3"
                  class="pa-2 pa-sm-5"
                  v-if="
                    title === 'All Projects' ||
                    title === 'Maintenance' ||
                    title === 'مشروعات الصيانة' ||
                    title === 'مشروعاتنا'
                  "
                >
                  <diplomatic-quarter />
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
import AlBahaUni from './projects/AlBahaUni.vue'
import DiplomaticQuarter from './projects/DiplomaticQuarter.vue'
import FaisalStadium from './projects/FaisalStadium.vue'
import GPYW from './projects/GPYW.vue'
import HajirClub from './projects/HajirClub.vue'
import ImamUni from './projects/ImamUni.vue'
import KhalidUniversity from './projects/KhalidUniversity.vue'
import KingFahadRoad from './projects/KingFahadRoad.vue'
import KingHistorical from './projects/KingHistorical.vue'
import NationalLibrary from './projects/NationalLibrary.vue'
import SattamBinAbdulazizUniversity from './projects/SattamBinAbdulazizUniversity.vue'
import SecurityCollege from './projects/SecurityCollege.vue'
// import gsap to reset scroll triggers after projects are loaded
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default {
  data() {
    return {
      projects: null,
    }
  },
  components: {
    ImamUni,
    AlBahaUni,
    KingHistorical,
    NationalLibrary,
    GPYW,
    FaisalStadium,
    HajirClub,
    KhalidUniversity,
    SecurityCollege,
    SattamBinAbdulazizUniversity,
    DiplomaticQuarter,
    KingFahadRoad,
  },
  computed: {
    titles() {
      let titlesArray = []
      titlesArray.push(
        this.$t('home.projects.types.all'),
        this.$t('home.projects.types.one'),
        this.$t('home.projects.types.two')
      )
      return titlesArray
    },
  },
  methods: {
    resetScrollTriggers() {
      ScrollTrigger.refresh()
    },
    startAnimation() {
      gsap.to('.sTriggerClass', {
        duration: 0.1,
        x: 0,
        scrollTrigger: {
          trigger: '.sTriggerClass',
          toggleActions: 'restart none none none',
          start: '25% bottom',
          onEnter: ({ isActive }) => {
            if (isActive) {
              let index = 0
              const interval = setInterval(() => {
                if (index >= 3) {
                  clearInterval(interval)
                } else {
                  this.resetScrollTriggers()
                  index++
                }
              }, 500)
            }
          },
        },
      })
    },
  },
  mounted() {
    this.startAnimation()
  },
}
</script>

<style lang="scss">
.v-slide-group__prev {
  display: none !important;
}
</style>
