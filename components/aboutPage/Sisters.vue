<template>
  <v-container class="px-5 px-md-0 py-5 py-md-8">
    <v-row class="mx-xl-16 px-xl-16">
      <v-col cols="12" class="py-8 py-xl-12">
        <div>
          <h2
            class="font-weight-bold text-center text-h4 text-sm-h3"
            :style="
              $i18n.locale == 'en'
                ? 'font-family: Montserrat!important; color: #d42532'
                : 'font-family: Almarai!important; color: #d42532'
            "
          >
            {{ $t('about.sisters.title') }}
          </h2>
        </div>
      </v-col>
    </v-row>
    <v-row class="px-3 px-md-16 mx-md-16 pb-2 pb-md-5">
      <v-col cols="6" sm="3" class="d-flex justify-center pa-2 pa-md-5">
        <div class="d-flex flex-column" style="overflow: hidden">
          <div class="logoContainer">
            <a href="https://www.buildingtec-elevators.com/" target="_blank">
              <v-img
                width="100%"
                height="100%"
                contain
                src="/logos/elevatorsLogo.png"
              ></v-img>
            </a>
          </div>
          <div>
            <p
              class="text-body-2 text-md-body-1 font-weight-medium pt-5 text-center"
            >
              {{ $t('about.sisters.comp02') }}
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="6" sm="3" class="d-flex justify-center pa-2 pa-md-5">
        <div class="d-flex flex-column" style="overflow: hidden">
          <div class="logoContainer">
            <a href="https://www.amos-sa.com" target="_blank">
              <v-img
                width="100%"
                height="100%"
                contain
                src="/logos/AMOS.jpg"
              ></v-img>
            </a>
          </div>
          <div>
            <p
              class="text-body-2 text-md-body-1 font-weight-medium pt-5 text-center"
            >
              {{ $t('about.sisters.comp01') }}
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="6" sm="3" class="d-flex justify-center pa-2 pa-md-5">
        <div class="d-flex flex-column" style="overflow: hidden">
          <div class="logoContainer">
            <a href="https://www.haktco.com" target="_blank">
              <v-img
                width="100%"
                height="100%"
                contain
                src="/logos/Haktco.jpg"
              ></v-img>
            </a>
          </div>
          <div>
            <p
              class="text-body-2 text-md-body-1 font-weight-medium py-5 text-center"
            >
              {{ $t('about.sisters.comp03') }}
            </p>
          </div>
        </div>
      </v-col>
      <v-col cols="6" sm="3" class="d-flex justify-center pa-2 pa-md-5">
        <div class="d-flex flex-column" style="overflow: hidden">
          <div class="logoContainer">
            <a href="https://www.upmoc.com" target="_blank">
              <v-img
                width="100%"
                height="100%"
                contain
                src="/logos/UPMOC.jpg"
              ></v-img>
            </a>
          </div>
          <div>
            <p
              class="text-body-2 text-md-body-1 font-weight-medium py-5 text-center"
            >
              {{ $t('about.sisters.comp04') }}
            </p>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.logoContainer {
  height: 125px;
  overflow: hidden;
}
@media screen and (max-width: 600px) {
  .logoContainer {
    height: 90px;
  }
}
@media screen and (max-width: 450px) {
  .logoContainer {
    height: 75px;
  }
}
</style>
