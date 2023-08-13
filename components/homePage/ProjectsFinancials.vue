<template>
  <div style="background-color: rgb(245, 245, 245)">
    <v-container class="pb-10">
      <!-- section title -->
      <v-row class="py-5 py-md-10">
        <v-col cols="12">
          <h2
            class="text-center font-weight-bold text-h5 text-sm-h4 text-md-h3"
            :style="
              $i18n.locale == 'en'
                ? 'font-family: Montserrat!important; color:#d42532'
                : 'font-family: Almarai!important; color:#d42532'
            "
          >
            {{ $t('home.projectsFinancials.title') }}
          </h2>
        </v-col>
      </v-row>
      <!-- data section -->
      <v-col cols="12" xl="8" offset-xl="2">
        <v-expansion-panels>
          <v-expansion-panel
            style="background-color: rgb(250, 250, 250)"
            class="mb-2"
          >
            <v-expansion-panel-header
              class="text-h6 text-md-h5"
              style="color: #d42532"
              >{{
                $t('home.projectsFinancials.first.title')
              }}</v-expansion-panel-header
            >
            <v-expansion-panel-content class="text-body-2">
              <p class="mb-2 font-weight-medium">
                {{ $t('home.projectsFinancials.first.secondaryTitle') }}
              </p>
              <p>{{ $t('home.projectsFinancials.first.body') }}</p>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel
            style="background-color: rgb(250, 250, 250)"
            class="mb-2"
          >
            <v-expansion-panel-header
              class="text-h6 text-md-h5"
              style="color: #d42532"
              >{{
                $t('home.projectsFinancials.second.title')
              }}</v-expansion-panel-header
            >
            <v-expansion-panel-content class="text-body-2">
              <p class="mb-2 font-weight-medium">
                {{ $t('home.projectsFinancials.second.secondaryTitle') }}
              </p>
              <p>{{ $t('home.projectsFinancials.second.body') }}</p>
            </v-expansion-panel-content>
          </v-expansion-panel>

          <v-expansion-panel
            style="background-color: rgb(250, 250, 250)"
            class="mb-2"
          >
            <v-expansion-panel-header
              class="text-h6 text-md-h5"
              style="color: #d42532"
              >{{
                $t('home.projectsFinancials.third.title')
              }}</v-expansion-panel-header
            >
            <v-expansion-panel-content class="text-body-2">
              <p class="mb-2 font-weight-medium">
                {{ $t('home.projectsFinancials.third.secondaryTitle') }}
              </p>
              <p>{{ $t('home.projectsFinancials.third.body') }}</p>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-container>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
