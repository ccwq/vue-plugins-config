import Vue from "vue";
import lcrLayout from "vue-iplus/src/comp/lcr-layout";
import vBox from "vue-iplus/src/comp/v-box";
import get from "lodash/get";
import request from "src/request";
import {$error, $success} from "src/utils";
// import {Message} from "view-design";
// import aModal from "view-plus/src/a-model"

Object.assign(Vue.prototype, {
    request,
    $ajax: request,
    _get: get,
    _got(...rest) {
        return get(this, ...rest)
    },
    $tickDelay(delay=0){
        return new Promise(r => setTimeout(r, delay));
    },
    $error,
    $success,
});

let mixin = {
    components:{
        vBox,
        lcrLayout,
    },

    computed:{
        uiState(){
            return this.$store.state.ui;
        },


        user() {
            const m = this;
            // if (!m.isLogin) {
            //     return ""
            // }
            return m.$store.state.user.user;
        },
    },
};

Vue.mixin(mixin);

import throttleMixin from "vue-iplus/src/mixin/throttle-method"
Vue.mixin(throttleMixin);
import debounceMixin from "vue-iplus/src/mixin/debounce-method";
Vue.mixin(debounceMixin);
