<template>
  <div>
    <Navbar style="z-index: 99" />
    <our-story style="margin-top: 80px" />
    <why-us />
    <sisters />
    <chairman />
    <quality-first />
  </div>
</template>

<script>
import Chairman from '~/components/aboutPage/Chairman.vue'
import OurStory from '~/components/aboutPage/OurStory.vue'
import QualityFirst from '~/components/aboutPage/QualityFirst.vue'
import Sisters from '~/components/aboutPage/Sisters.vue'
import WhyUs from '~/components/aboutPage/WhyUs.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  components: {
    Navbar,
    OurStory,
    WhyUs,
    Sisters,
    Chairman,
    QualityFirst,
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
