<template>
  <div id="clientsSection">
    <div class="overlay">
      <v-container class="pb-10">
        <div class="py-0 py-md-10">
          <div class="pt-8 pb-5 px-5">
            <h2
              class="white--text py-5 pb-5 text-center font-weight-bold text-h4 text-sm-h3 text-md-h2"
              :style="
                $i18n.locale == 'en'
                  ? 'font-family: Montserrat!important; text-align: left!important'
                  : 'font-family: Almarai!important; text-align: right!important'
              "
            >
              {{ $t('home.clients.title') }}
            </h2>
          </div>
          <v-row class="py-0 py-md-2">
            <v-col cols="12" md="6" class="py-0">
              <p
                class="px-5 white--text text-body-2 text-md-body-1 font-weight-regular"
              >
                {{ $t('home.clients.body.p1') }}
              </p>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <p
                class="px-5 white--text text-body-2 text-md-body-1 font-weight-regular"
              >
                {{ $t('home.clients.body.p2') }}
              </p>
            </v-col>
          </v-row>
          <v-row class="py-0 py-md-2">
            <v-col cols="12" md="6" class="py-0">
              <p
                class="px-5 white--text text-body-2 text-md-body-1 font-weight-regular"
              >
                {{ $t('home.clients.body.p3') }}
              </p>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <p
                class="px-5 white--text text-body-2 text-md-body-1 font-weight-regular"
              >
                {{ $t('home.clients.body.p4') }}
              </p>
            </v-col>
          </v-row>
          <v-row class="py-0 py-md-2">
            <v-col cols="12" md="6" class="py-0">
              <p
                class="px-5 white--text text-body-2 text-md-body-1 font-weight-regular"
              >
                {{ $t('home.clients.body.p5') }}
              </p>
            </v-col>
            <v-col cols="12" md="6" class="py-0">
              <p
                class="px-5 white--text text-body-2 text-md-body-1 font-weight-regular"
              >
                {{ $t('home.clients.body.p6') }}
              </p>
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
#clientsSection {
  background-image: url('https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/homePage/client-min_lH5fZ2QYQ.jpg');
  background-position: center;
  background-repeat: none;
  background-size: cover;
  .overlay {
    background-color: rgba(0, 0, 0, 0.75);
    height: 100%;
    h2 {
      width: 100%;
    }
  }
}
</style>
