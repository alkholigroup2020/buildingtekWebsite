<template>
  <v-container class="px-5 px-md-0 py-5 py-md-8">
    <v-row class="mx-xl-16 px-xl-16 mt-5 mt-md-10">
      <v-col cols="12" class="py-0">
        <div>
          <h2
            class="font-weight-bold text-h4 text-sm-h3 pb-3 pb-md-5"
            :style="
              $i18n.locale == 'en'
                ? 'font-family: Montserrat!important; text-align: left!important; color: #d42532'
                : 'font-family: Almarai!important; text-align: right!important; color: #d42532'
            "
          >
            {{ $t('about.story.title') }}
          </h2>
          <p class="py-2 py-md-3 text-h6 text-md-h5 font-weight-medium">
            {{ $t('about.story.subTitle') }}
          </p>
        </div>
      </v-col>
    </v-row>
    <v-row class="mx-xl-16 px-xl-16 pb-5 pb-xl-10">
      <v-col class="pt-0" cols="12" lg="7">
        <ul
          class="text-body-2 text-md-body-1 ulStyle"
          :class="
            $i18n.locale === 'en' ? 'pr-0 pr-md-15' : 'pl-0 pl-md-15 pr-5'
          "
        >
          <li class="pb-5">
            {{ $t('about.story.list.li1') }}
          </li>
          <li class="pb-5">
            {{ $t('about.story.list.li2') }}
          </li>
          <li class="pb-5">
            {{ $t('about.story.list.li3') }}
          </li>
          <li class="pb-5">
            {{ $t('about.story.list.li4') }}
          </li>
        </ul>
      </v-col>
      <v-col cols="12" lg="5">
        <div>
          <v-img
            eager
            alt="our story image"
            src="https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/aboutPage/scott-graham-OQMZwNd3ThU-unsplash_pSHoAR3FZ.jpg"
          ></v-img>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.ulStyle {
  list-style: url('/RightMark.svg');
}
</style>
