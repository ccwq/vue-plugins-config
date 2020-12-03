import './gt'


/**
 * 极验相关功能封装
 */
export default {
    data() {
        return {
            //极验的结果
            gtValidate:"",

            //geetest的实例
            _gt:"",
        }
    },
    methods: {

        resetGT(){
            const m = this;
            m._gt.reset();
            m.gtValidate = "";
        },

        /**
         * 要求组件中必须有一个ref未gtdom的节点
         */
        async initGT (refName="gtdom") {
            const m = this;
            let domNode = m.$refs[refName];
            if(!domNode) {
                throw new Error("要求组件中必须有一个ref未gtdom的节点")
            }

            let data;

            try {
                data = await m.initHandler(m.initUrl);
            } catch (e) {
                if (e) {
                    //输出错误
                    console.error("初始化geetest出错:",e);
                }
                throw e;
            }


            return new Promise((resolve, reject) => {
                initGeetest({
                    // 以下配置参数来自服务端 SDK
                    gt: data.gt,
                    challenge: data.challenge,
                    offline: !data.success,
                    new_captcha: true
                }, function (captchaObj) {
                    domNode.innerHTML = '';
                    m.__captchaObj = captchaObj;
                    captchaObj.appendTo(domNode)
                    captchaObj.onReady(async function(){
                        await m.$tickDelay();
                        domNode.firstElementChild.style.width = '100%'
                        m._gt = captchaObj;
                    })
                    captchaObj.onError(err=>{
                        reject(err);
                        debugger;
                        m.$emit("input", "");
                    });
                    captchaObj.onSuccess(_ => {
                        resolve(captchaObj)
                        m.gtValidate = {
                            ...captchaObj.getValidate(),
                            gtStatus: data,
                        }
                        m.$emit("input", m.gtValidate);
                    });
                })
            })
        },

    },

    beforeDestroy(){
        const m = this;
        if (m.__captchaObj) {
            m.__captchaObj.destroy();
        }
    },
}