import isPlainObject from "lodash/isPlainObject"
import merge from "lodash/merge"
import get from "lodash/get"
import set from "lodash/set"
import debounce from "lodash/debounce"
import throttle from "lodash/throttle"
import each from "lodash/each"
import find from "lodash/find"
import pick from "lodash/pick"
import includes from "lodash/includes"
import flatten from "lodash/flatten"
import groupBy from "lodash/groupBy"
import Vue from "vue";

const lodash = {
    isPlainObject,
    get,
    set,
    merge,
    each,
    debounce,
    throttle,
    find,
    pick,
    includes,
    flatten,
    groupBy,
}

// window._ = lodash;
Vue.prototype._ = lodash;
export default lodash;