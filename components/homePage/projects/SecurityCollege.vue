<template>
  <v-dialog width="1100px" v-model="dialog">
    <template v-slot:activator="{ on, attrs }">
      <div v-bind="attrs" v-on="on">
        <v-hover v-slot="{ hover }">
          <v-card>
            <v-img
              src="https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/homePage/Projects/kfsc_5RXcihgrQR.png"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="transition-fast-in-fast-out v-card--reveal white--text cardBG"
                  :style="hover ? 'cursor: pointer;' : ''"
                >
                  <hr
                    :class="$i18n.locale === 'en' ? 'firstLine' : 'firstLineAR'"
                  />
                  <hr
                    :class="
                      $i18n.locale === 'en' ? 'secondLine' : 'secondLineAR'
                    "
                  />
                  <p
                    :class="$i18n.locale === 'en' ? 'projTitle' : 'projTitleAR'"
                    class="text-body-2 text-md-h6 text-lg-h5 font-weight-medium"
                  >
                    {{ $t('home.projects.proj9.title') }}
                  </p>
                </div>
              </v-expand-transition>
            </v-img>
          </v-card>
        </v-hover>
      </div>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline coloredText">{{
          $t('home.projects.proj9.title')
        }}</span>
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pb-0">
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="6"
              class="pt-1 pt-md-3 text-body-2 font-weight-medium"
            >
              <p>{{ $t('home.projects.proj9.body.p1') }}</p>
              <p>{{ $t('home.projects.proj9.body.p2') }}</p>
            </v-col>
            <v-col cols="12" md="6">
              <v-img
                src="https://ik.imagekit.io/vrjsolbznpr/alkholiWebSite/homePage/Projects/kfsc_5RXcihgrQR.png"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-spacer></v-spacer>
        <div>
          <v-btn
            outlined
            class="text-body-2 text-capitalize px-5"
            text
            @click="dialog = false"
          >
            <span class="coloredText">
              {{ $t('home.projects.proj9.btn') }}
            </span>
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.cardBG {
  height: 100%;
  background-color: rgba(212, 37, 50, 0.7);
  position: relative;
}
.coloredText {
  color: #d42532;
}
.firstLine {
  position: absolute;
  top: 80%;
  left: 10%;
  width: 80%;
  height: 2px;
  border-radius: 5px;
  background-color: white;
  border: none;
}
.secondLine {
  position: absolute;
  top: 10%;
  left: 15%;
  width: 2px;
  height: 80%;
  border-radius: 5px;
  background-color: white;
  border: none;
}
.projTitle {
  position: absolute;
  bottom: 20%;
  left: 20%;
  color: white;
  max-width: 70%;
}
.firstLineAR {
  position: absolute;
  top: 80%;
  right: 10%;
  width: 80%;
  height: 2px;
  border-radius: 5px;
  background-color: white;
  border: none;
}
.secondLineAR {
  position: absolute;
  top: 10%;
  right: 15%;
  width: 2px;
  height: 80%;
  border-radius: 5px;
  background-color: white;
  border: none;
}
.projTitleAR {
  position: absolute;
  bottom: 20%;
  right: 20%;
  color: white;
  max-width: 70%;
}
@media screen and (max-width: 550px) {
  .projTitle {
    bottom: 12%;
  }
  .projTitleAR {
    bottom: 12%;
  }
}
</style>
