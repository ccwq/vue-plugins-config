<template lang="pug">
    .gt-dom(ref="gtdom")
        .db.h100p.tc.bg-grey10.bd1px.bd-grey200 验证正在初始化...


</template>
<script>
    import mixin from "./mixin";
    import simulateEvent from "simulate-event";

    export default {
        name: "geetest",
        mixins: [mixin],
        props:{

            initUrl:{
                default:"",
                type:String,
            },

            //禁止自动初始化
            disableAutoInit:{
                default: false,
                type:Boolean,
            },

            initHandler:{
                default:_=>_,
                type:Function,
            },
        },

        methods: {
            reset() {
                const m = this;
                m.resetGT();
            },

            init(){
                const m = this;
                return m.initGT();
            },

            popup(){
                const m = this;
                simulateEvent.simulate(m.$el, "click");
            },
        },
        mounted() {
            const m = this;

            if (!m.disableAutoInit) {
                m.init();
            }

        }
    }
</script>
<style scoped lang="less">
    @import "vars";
    @import (reference) "luss";

    .geetest-comp {

    }
</style>
