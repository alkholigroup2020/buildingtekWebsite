<template>
  <v-hover v-slot="{ hover }">
    <div class="py-0 py-md-5 px-5 white--text">
      <div class="py-2">
        <IconBase
          width="40"
          height="40"
          :iconColor="hover ? '#F8BBD0' : 'white'"
        >
          <Landscape />
        </IconBase>
      </div>
      <h3
        class="text-h6 text-md-h5 font-weight-medium"
        :class="hover ? 'pink--text text--lighten-4' : 'white--text'"
      >
        {{ $t('home.services.sections.landscaping.title') }}
      </h3>
      <p
        style="max-height: 81px; line-height: 25px; overflow: hidden"
        class="text-body-2 text-md-body-1 py-2 font-weight-regular mb-0"
        :class="$i18n.locale === 'en' ? 'pr-0 pr-md-5' : 'pl-0 pl-md-5 pl-xl-8'"
      >
        {{ $t('home.services.sections.landscaping.body1') }}
      </p>
      <v-btn :ripple="false" text color="transparent" class="pa-0">
        <nuxt-link :to="localePath('/services')" class="text-decoration-none">
          <span
            class="text-subtitle-2 text-md-subtitle-1 text-capitalize"
            :class="hover ? 'pink--text text--lighten-4' : 'white--text'"
            >{{ $t('home.services.sections.landscaping.btn') }}
          </span>
        </nuxt-link>
      </v-btn>
    </div></v-hover
  >
</template>

<script>
export default {}
</script>
