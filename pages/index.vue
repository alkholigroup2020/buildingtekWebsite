<template>
  <div>
    <HomeNavbar style="z-index: 99" />
    <FloatingNav style="z-index: 99" v-if="position >= 1200" />
    <landing />
    <intro />
    <services />
    <projects />
    <lets-work />
    <clients />
    <client-logos />
    <clients-count />
  </div>
</template>

<script>
import Landing from '~/components/homePage/Landing.vue'
import HomeNavbar from '~/components/homePage/HomeNavbar.vue'
import FloatingNav from '~/components/homePage/FloatingNav.vue'
import Intro from '~/components/homePage/Intro.vue'
import Services from '~/components/homePage/Services.vue'
import Projects from '~/components/homePage/Projects.vue'
import LetsWork from '~/components/homePage/LetsWork.vue'
import Clients from '~/components/homePage/Clients.vue'
import ClientLogos from '~/components/homePage/ClientLogos.vue'
import ClientsCount from '~/components/homePage/ClientsCount.vue'
export default {
  components: {
    Landing,
    HomeNavbar,
    FloatingNav,
    Intro,
    Services,
    Projects,
    LetsWork,
    Clients,
    ClientLogos,
    ClientsCount,
  },
  data() {
    return {
      position: 0,
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    handleScroll() {
      this.position = document.documentElement.scrollTop
    },
  },
}
</script>
