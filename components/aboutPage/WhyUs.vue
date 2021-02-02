<template>
  <div class="sectionBG">
    <v-container class="px-5 px-md-0 py-5 py-md-8">
      <v-row class="mx-xl-16 px-xl-16">
        <v-col cols="12" class="py-5 py-xl-8">
          <div>
            <h2
              class="font-weight-bold text-center text-h4 text-sm-h3"
              :style="
                $i18n.locale == 'en'
                  ? 'font-family: Montserrat!important; color: #d42532'
                  : 'font-family: Almarai!important; color: #d42532'
              "
            >
              {{ $t('about.whyUs.title') }}
            </h2>
          </div>
        </v-col>
      </v-row>
      <v-row class="mx-xl-16 px-xl-16 pb-5">
        <v-col cols="12" lg="8">
          <ul
            class="text-body-2 text-md-body-1 ulStyle"
            :class="
              $i18n.locale === 'en' ? 'pr-0 pr-md-5' : 'pl-0 pl-md-5 pr-5'
            "
          >
            <li class="pb-5">
              {{ $t('about.whyUs.list.li1') }}
            </li>
            <li class="pb-5">
              {{ $t('about.whyUs.list.li2') }}
            </li>
            <li class="pb-5">
              {{ $t('about.whyUs.list.li3') }}
            </li>
            <li class="pb-5">
              {{ $t('about.whyUs.list.li4') }}
            </li>
          </ul>
        </v-col>
        <v-col cols="12" lg="4">
          <div class="mb-3">
            <v-expansion-panels>
              <v-expansion-panel style="background-color: rgb(250, 250, 250)">
                <v-expansion-panel-header
                  class="text-h6 text-md-h5"
                  style="color: #d42532"
                  >{{
                    $t('about.whyUs.vision.title')
                  }}</v-expansion-panel-header
                >
                <v-expansion-panel-content class="text-body-2">
                  {{ $t('about.whyUs.vision.body') }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
          <div>
            <v-expansion-panels>
              <v-expansion-panel style="background-color: rgb(250, 250, 250)">
                <v-expansion-panel-header
                  class="text-h6 text-md-h5"
                  style="color: #d42532"
                  >{{
                    $t('about.whyUs.mission.title')
                  }}</v-expansion-panel-header
                >
                <v-expansion-panel-content class="text-body-2">
                  {{ $t('about.whyUs.mission.body') }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sectionBG {
  background-color: rgb(250, 250, 250);
}
.ulStyle {
  list-style: url('/ThumbsUp.svg');
}
</style>
