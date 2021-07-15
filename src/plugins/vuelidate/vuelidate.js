import Vue from 'vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import {helpers} from 'vuelidate/lib/validators';
const {withParams, regex} = helpers;
const alpha = helpers.regex('alpha', /^[a-zA-Z]*$/)

/**
 * 手机号码验证
 */
export const isMoblie = regex(
    "isMobile",
    /^1[3-9]\d{9}$/
)
