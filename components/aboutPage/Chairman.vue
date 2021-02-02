<template>
  <div style="background-color: rgb(250, 250, 250)">
    <v-container class="px-5 px-md-0 py-5 py-md-8">
      <v-row class="mx-xl-16 px-xl-16 mt-5 mt-md-10">
        <v-col cols="12" class="py-0">
          <div>
            <h2
              class="font-weight-bold text-h4 text-sm-h3 pb-5 pb-md-10"
              :style="
                $i18n.locale == 'en'
                  ? 'font-family: Montserrat!important; text-align: left!important; color: #d42532'
                  : 'font-family: Almarai!important; text-align: right!important; color: #d42532'
              "
            >
              {{ $t('about.chairman.title') }}
            </h2>
          </div>
        </v-col>
      </v-row>
      <v-row class="mx-xl-16 px-xl-16 pb-5 pb-md-10">
        <v-col cols="12">
          <v-img
            :style="
              $i18n.locale === 'en'
                ? 'float: right; margin-left: 20px; margin-bottom: 20px'
                : 'float: left; margin-right: 20px; margin-bottom: 20px'
            "
            eager
            class="imgSize"
            src="/KholiChairman.jpg"
          ></v-img>
          <ul
            class="text-body-2 text-md-body-1 ulStyle"
            :class="$i18n.locale === 'en' ? '' : 'pr-5'"
          >
            <li class="pb-5">
              {{ $t('about.chairman.list.li1') }}
            </li>
            <li class="pb-5">
              {{ $t('about.chairman.list.li2') }}
            </li>
            <li class="pb-5">
              {{ $t('about.chairman.list.li3') }}
            </li>
            <li class="pb-5">
              {{ $t('about.chairman.list.li4') }}
            </li>
            <li class="pb-5">
              {{ $t('about.chairman.list.li5') }}
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.ulStyle {
  list-style: url('/RightMark.svg');
}
.imgSize {
  max-width: 350px;
}
@media screen and (max-width: 1200px) {
  .imgSize {
    max-width: 200px;
  }
}
@media screen and (max-width: 800px) {
  .imgSize {
    max-width: 150px;
  }
}
@media screen and (max-width: 450px) {
  .imgSize {
    max-width: 125px;
  }
}
@media screen and (max-width: 320px) {
  .imgSize {
    max-width: 100px;
  }
}
</style>
