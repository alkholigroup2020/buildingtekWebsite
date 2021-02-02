<template>
  <div class="px-5 mx-lg-5 px-lg-5 mx-xl-16 px-xl-16 my-sm-10">
    <v-row class="pb-5">
      <v-col
        cols="12"
        md="6"
        :order="
          this.$i18n.locale == 'ar' && $vuetify.breakpoint.smAndUp ? 2 : 1
        "
      >
        <div class="parent">
          <v-img
            eager
            alt="construction image"
            class="child1 introAnimation"
            width="380"
            src="https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/homePage/Intro/intro-banner-1_q7sJl_ZAv.jpg"
          ></v-img>
          <v-img
            eager
            alt="construction image"
            class="child2 introAnimation"
            width="380"
            src="https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/homePage/Intro/intro-banner-2_LxrNkLapHi.jpg"
          ></v-img>
        </div>
      </v-col>
      <v-col
        cols="12"
        md="6"
        :order="
          this.$i18n.locale == 'ar' && $vuetify.breakpoint.smAndUp ? 1 : 2
        "
        class="px-md-10 px-lg-16"
        :class="[this.$i18n.locale == 'ar' ? 'rightPadding' : '']"
      >
        <div
          class="d-flex flex-column justify-center px-1 px-sm-10 px-md-0"
          style="height: 100%"
        >
          <div class="d-flex my-5">
            <div>
              <v-img
                eager
                max-width="55px"
                src="https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/homePage/Intro/Intro001_XwJ-v6iZ75.png"
              ></v-img>
            </div>
            <div class="px-3 px-md-5">
              <h3 class="mb-3 text-h5 font-weight-medium">
                {{ $t('intro.title1') }}
              </h3>
              <p
                class="text-body-2 text-md-body-1"
                :class="
                  this.$i18n.locale == 'ar'
                    ? 'pl-md-0 pl-lg-15'
                    : 'pr-md-0 pr-lg-15'
                "
              >
                {{ $t('intro.body1') }}
              </p>
            </div>
          </div>
          <div class="d-flex my-5">
            <div>
              <v-img
                eager
                max-width="55px"
                src="https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/homePage/Intro/Intro002_IFBoHyb1m.png"
              ></v-img>
            </div>
            <div class="px-3 px-md-5">
              <h3 class="mb-3 text-h5 font-weight-medium">
                {{ $t('intro.title2') }}
              </h3>
              <p
                class="text-body-2 text-md-body-1"
                :class="
                  this.$i18n.locale == 'ar'
                    ? 'pl-md-0 pl-lg-15'
                    : 'pr-md-0 pr-lg-15'
                "
              >
                {{ $t('intro.body2') }}
              </p>
            </div>
          </div>
          <div class="d-flex my-5">
            <div>
              <v-img
                eager
                max-width="55px"
                src="https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/homePage/Intro/Intro003_Lk_uzNYged.png"
              ></v-img>
            </div>
            <div class="px-3 px-md-5">
              <h3 class="mb-3 text-h5 font-weight-medium">
                {{ $t('intro.title3') }}
              </h3>
              <p
                class="text-body-2 text-md-body-1"
                :class="
                  this.$i18n.locale == 'ar'
                    ? 'pl-md-0 pl-lg-15'
                    : 'pr-md-0 pr-lg-15'
                "
              >
                {{ $t('intro.body3') }}
              </p>
            </div>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.parent {
  display: flex;
  position: relative;
  height: 650px;
  .child1 {
    max-width: 100%;
    height: 420px;
    position: absolute;
    top: 50px;
    left: 12%;
    z-index: 9;
    box-shadow: rgb(90, 90, 90) 0px 0px 10px;
  }
  .child2 {
    max-width: 100%;
    height: 420px;
    position: absolute;
    top: 200px;
    left: 45%;
    z-index: 8;
    box-shadow: rgb(90, 90, 90) 0px 0px 10px;
  }
}
.rightPadding {
  padding-right: 150px !important;
}
@media screen and (max-width: 1650px) {
  .parent {
    .child1 {
      left: 10%;
    }
    .child2 {
      left: 48%;
    }
  }
  .rightPadding {
    padding-right: 20px !important;
  }
}
@media screen and (max-width: 1500px) {
  .parent {
    height: 600px;
    .child1 {
      height: 400px;
      max-width: 400px;
      left: 8%;
    }
    .child2 {
      height: 400px;
      max-width: 400px;
      left: 45%;
    }
  }
}
@media screen and (max-width: 1400px) {
  .parent {
    .child1 {
      height: 380px;
      max-width: 320px;
      left: 11%;
    }
    .child2 {
      height: 380px;
      max-width: 320px;
      left: 45%;
    }
  }
}
@media screen and (max-width: 1150px) {
  .parent {
    .child1 {
      height: 350px;
      max-width: 280px;
      left: 12%;
    }
    .child2 {
      height: 350px;
      max-width: 280px;
      left: 42%;
    }
  }
}
@media screen and (max-width: 1050px) {
  .parent {
    height: 450px;
    .child1 {
      height: 320px;
      max-width: 250px;
      left: 15%;
    }
    .child2 {
      height: 320px;
      max-width: 250px;
      left: 45%;
    }
  }
}
@media screen and (max-width: 960px) {
  .parent {
    display: none;
  }
}
</style>
