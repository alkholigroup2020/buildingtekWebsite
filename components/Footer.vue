<template>
  <div>
    <v-container class="pt-5 pt-md-8 pb-3 pb-md-6">
      <v-row>
        <v-col cols="12">
          <h2
            class="text-center font-weight-bold text-h4 text-sm-h3 pb-1 pb-md-3"
            :style="
              $i18n.locale == 'en'
                ? 'font-family: Montserrat!important; color:#d42532'
                : 'font-family: Almarai!important; color:#d42532'
            "
          >
            {{ $t('footer.title') }}
          </h2>
        </v-col>
      </v-row>
      <div class="px-xl-16 mx-xl-16">
        <div class="px-3 px-sm-5 px-md-0 px-xl-16 mx-xl-16">
          <v-row>
            <!-- left side - info -->
            <v-col cols="12" md="6" class="pt-5 pt-md-8">
              <v-row>
                <v-col cols="12" class="py-0">
                  <p
                    class="text-body-2 text-md-body-1 font-weight-regular"
                    :class="
                      $i18n.locale === 'en' ? 'pr-0 pr-md-3' : 'pl-0 pl-md-3'
                    "
                  >
                    {{ $t('footer.info.intro') }}
                  </p>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-hover v-slot="{ hover }">
                    <div class="d-flex">
                      <IconBase
                        width="25"
                        height="25"
                        class="pt-1"
                        :iconColor="hover ? '#d42532' : 'black'"
                      >
                        <Address />
                      </IconBase>
                      <p
                        class="text-body-2 text-md-body-1 font-weight-regular px-2"
                      >
                        {{ $t('footer.info.address') }}
                      </p>
                    </div>
                  </v-hover>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="py-0 pb-5">
                  <div class="mapContainer">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1813.0764648118545!2d46.70551005817232!3d24.652863833769374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f04f701ea3af5%3A0x7a5f653d728c2c57!2z2YXYrNmF2YjYudipINin2YTYr9mD2KrZiNixINit2YXYstmHINin2YTYrtmI2YTZig!5e0!3m2!1sen!2ssa!4v1608708035061!5m2!1sen!2ssa"
                      class="googleMap"
                      frameborder="0"
                      style="border: 0"
                      allowfullscreen=""
                      aria-hidden="false"
                      tabindex="0"
                    ></iframe>
                  </div>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-hover v-slot="{ hover }">
                    <div class="fitContent">
                      <a
                        href="tel:00966114041919"
                        class="d-flex text-decoration-none black--text"
                      >
                        <IconBase
                          width="22"
                          height="22"
                          class="pt-1"
                          :iconColor="hover ? '#d42532' : 'black'"
                        >
                          <Phone />
                        </IconBase>
                        <p
                          class="text-body-2 text-md-body-1 font-weight-regular px-2"
                        >
                          {{ $t('footer.info.phone1') }}
                        </p>
                      </a>
                    </div>
                  </v-hover>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-hover v-slot="{ hover }">
                    <div class="fitContent">
                      <a
                        href="tel:00966114053013"
                        class="d-flex text-decoration-none black--text"
                      >
                        <IconBase
                          width="22"
                          height="22"
                          class="pt-1"
                          :iconColor="hover ? '#d42532' : 'black'"
                        >
                          <Phone />
                        </IconBase>
                        <p
                          class="text-body-2 text-md-body-1 font-weight-regular px-2"
                        >
                          {{ $t('footer.info.phone2') }}
                        </p>
                      </a>
                    </div>
                  </v-hover>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" class="py-0">
                  <v-hover v-slot="{ hover }">
                    <div class="fitContent">
                      <a
                        href="mailto:info@buildingtek.com"
                        class="d-flex text-decoration-none black--text"
                      >
                        <IconBase
                          width="22"
                          height="22"
                          class="pt-1"
                          :iconColor="hover ? '#d42532' : 'black'"
                        >
                          <Mail />
                        </IconBase>
                        <p
                          class="text-body-2 text-md-body-1 font-weight-regular px-2"
                        >
                          {{ $t('footer.info.mail') }}
                        </p>
                      </a>
                    </div>
                  </v-hover>
                </v-col>
              </v-row>
            </v-col>
            <!-- right side - form -->
            <v-col cols="12" md="6" class="pt-0 pt-md-8">
              <v-form
                name="contactForm"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                method="POST"
              >
                <input type="hidden" name="form-name" value="contactForm" />
                <v-row>
                  <v-col cols="12" class="py-1 py-md-2" offset-md="1">
                    <v-text-field
                      :label="fullNameT"
                      name="fullName"
                      type="text"
                      v-model="fullName"
                      outlined
                      dense
                      color="#F8BBD0"
                      :error-messages="fullNameErrors"
                      @input="$v.fullName.$touch()"
                      @blur="$v.fullName.$touch()"
                      @keydown="preventSubmit"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-1 py-md-2" offset-md="1">
                    <v-text-field
                      :label="mNumberT"
                      type="tel"
                      name="mobile"
                      v-model="mobile"
                      color="#F8BBD0"
                      outlined
                      dense
                      :error-messages="mobileErrors"
                      @input="$v.mobile.$touch()"
                      @blur="$v.mobile.$touch()"
                      @keydown="preventSubmit"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="pb-0 pt-1 pt-md-2" offset-md="1">
                    <v-text-field
                      :label="mAddressT"
                      type="email"
                      name="mail"
                      dense
                      outlined
                      v-model="mailAddress"
                      color="#F8BBD0"
                      :error-messages="mailErrors"
                      @blur="$v.mailAddress.$touch()"
                      @keydown="preventSubmit"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="pt-0 pb-3" offset-md="1">
                    <v-textarea
                      v-model="message"
                      color="#F8BBD0"
                      name="message"
                      :label="tAreaT"
                      height="145"
                      @keydown="preventSubmit"
                      :error-messages="msgErrors"
                    ></v-textarea>
                  </v-col>
                  <v-col cols="12" class="py-1 py-md-2" offset-md="1">
                    <div
                      class="d-flex align-end justify-end"
                      style="height: 100%"
                    >
                      <v-btn
                        large
                        outlined
                        text
                        @click="validateForm"
                        color="#d63031"
                        style="color: #d63031"
                        class="py-1 py-md-3 px-3 px-md-5 text-body-2 text-md-body-1 text-capitalize"
                        >{{ $t('footer.form.send') }}</v-btn
                      >
                    </div>
                    <div hidden>
                      <button ref="submitBTN" type="submit">
                        Submit hidden
                      </button>
                    </div>
                  </v-col>
                </v-row>
              </v-form>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
    <div class="rights">
      <p>Copyright &copy; Alkholi Group {{ getTheCurrentYear }}</p>
    </div>
  </div>
</template>

<script>
import { required, numeric, email } from 'vuelidate/lib/validators'
export default {
  data() {
    return {
      fullName: '',
      mobile: '',
      mailAddress: '',
      message: '',
    }
  },
  validations: {
    fullName: { required },
    message: { required },
    mobile: { numeric },
    mailAddress: { email },
  },
  computed: {
    fullNameErrors() {
      const errors = []
      if (!this.$v.fullName.$dirty) {
        return errors
      } else if (!this.$v.fullName.required) {
        errors.push(this.$t('footer.form.errors.name'))
        return errors
      }
    },
    msgErrors() {
      const errors = []
      if (!this.$v.message.$dirty) {
        return errors
      } else if (!this.$v.message.required) {
        errors.push(this.$t('footer.form.errors.name'))
        return errors
      }
    },
    mobileErrors() {
      const errors = []
      if (!this.$v.mobile.$dirty) {
        return errors
      } else if (!this.$v.mobile.numeric) {
        errors.push(this.$t('footer.form.errors.mobile'))
        return errors
      }
    },
    mailErrors() {
      const errors = []
      if (!this.$v.mailAddress.$dirty) {
        return errors
      } else if (!this.$v.mailAddress.email) {
        errors.push(this.$t('footer.form.errors.mail'))
        return errors
      }
    },
    getTheCurrentYear() {
      return new Date().getFullYear()
    },
    fullNameT() {
      return this.$t('footer.form.name')
    },
    mNumberT() {
      return this.$t('footer.form.mNumber')
    },
    mAddressT() {
      return this.$t('footer.form.mAddress')
    },
    tAreaT() {
      return this.$t('footer.form.msg')
    },
  },
  methods: {
    validateForm() {
      this.$v.$touch()
      if (this.$v.$invalid) {
        //
      } else {
        this.$refs.submitBTN.click()
      }
    },
    preventSubmit(event) {
      if (event.keyCode == 13) {
        event.preventDefault()
        return false
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.fitContent {
  width: fit-content;
}
.mapContainer {
  border: 1px solid black;
  width: 400px;
  overflow: hidden;
  border-radius: 5px;
  .googleMap {
    width: 400px;
    height: 220px;
  }
}
.rights {
  background-color: #424242;
  p {
    text-align: center;
    padding: 20px 0px;
    width: 100%;
    color: whitesmoke;
    font-size: 16px;
    margin-bottom: 0px;
  }
}
@media screen and (max-width: 600px) {
  .mapContainer {
    width: 330px;
    .googleMap {
      width: 330px;
      height: 180px;
    }
  }
}
@media screen and (max-width: 410px) {
  .mapContainer {
    width: 280px;
    .googleMap {
      width: 280px;
      height: 150px;
    }
  }
}
@media screen and (max-width: 330px) {
  .mapContainer {
    width: 250px;
    .googleMap {
      width: 250px;
      height: 140px;
    }
  }
}
</style>
