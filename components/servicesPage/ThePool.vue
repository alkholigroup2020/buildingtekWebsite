<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <div class="iconBG">
          <IconBase width="50" height="50" color="white">
            <Pool />
          </IconBase>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <div style="width: fit-content">
          <h3
            class="text-h6 text-md-h5 font-weight-medium"
            style="color: #d42532"
          >
            {{ $t('home.services.sections.pool.title') }}
          </h3>
          <hr />
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <p class="text-body-2 text-md-body-1 mb-0">
          {{ $t('home.services.sections.pool.body') }}
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.iconBG {
  background-color: #424242;
  width: fit-content;
  padding: 5px;
}
</style>
