<template>
  <div id="servicesSection">
    <div class="overlay">
      <div class="pt-15 pb-5">
        <h2
          class="py-5 text-center font-weight-bold text-h4 text-sm-h3 text-md-h2"
          :style="
            $i18n.locale == 'en'
              ? 'font-family: Montserrat!important;'
              : 'font-family: Almarai!important'
          "
        >
          {{ $t('home.services.title') }}
        </h2>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" lg="4" class="servicesAnimation">
              <FacilityManagement />
            </v-col>
            <v-col cols="12" sm="6" lg="4" class="servicesAnimation">
              <Landscaping />
            </v-col>
            <v-col cols="12" sm="6" lg="4" class="servicesAnimation">
              <Constructions />
            </v-col>
            <v-col cols="12" sm="6" lg="4" class="servicesAnimation">
              <Electrical />
            </v-col>
            <v-col cols="12" sm="6" lg="4" class="servicesAnimation">
              <PoolCleaning />
            </v-col>
            <v-col cols="12" sm="6" lg="4" class="servicesAnimation">
              <Mechanical />
            </v-col>
          </v-row>
        </v-container>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import FacilityManagement from '~/components/homePage/servicesSections/FacilityManagement.vue'
import Constructions from '~/components/homePage/servicesSections/Constructions.vue'
import Electrical from '~/components/homePage/servicesSections/Electrical.vue'
import Landscaping from '~/components/homePage/servicesSections/Landscaping.vue'
import Mechanical from '~/components/homePage/servicesSections/Mechanical.vue'
import PoolCleaning from '~/components/homePage/servicesSections/PoolCleaning.vue'
export default {
  components: {
    FacilityManagement,
    Constructions,
    Electrical,
    Landscaping,
    Mechanical,
    PoolCleaning,
  },
  methods: {
    startAnimation() {
      const services = document.querySelectorAll('.servicesAnimation')
      let srvObserver = new IntersectionObserver(
        function (entries, self) {
          let targets = entries.map((entry) => {
            if (entry.isIntersecting) {
              self.unobserve(entry.target)
              return entry.target
            }
          })
          gsap.to(targets, {
            duration: 0.8,
            opacity: 1,
            stagger: {
              each: 0.1,
            },
          })
        },
        { rootMargin: '-200px' }
      )

      services.forEach((srv) => {
        srvObserver.observe(srv)
      })
    },
  },
  mounted() {
    this.startAnimation()
  },
}
</script>

<style lang="scss" scoped>
#servicesSection {
  background-image: url('https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/homePage/bg-parallax1-min_K6szdz-Z6.jpg');
  background-position: center;
  background-repeat: none;
  background-size: cover;
  .overlay {
    background-color: rgba(0, 0, 0, 0.6);
    height: 100%;
    h2 {
      color: #f8bbd0;
      text-shadow: whitesmoke -1px -1px 0px;
    }
  }
  .servicesAnimation {
    opacity: 0;
  }
}
</style>
