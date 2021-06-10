/**
 * 确认对话框
 * @param content
 * @param okText
 * @param cancelText
 * @returns {Promise<boolean>}
 */
import {f7Ready} from "@/plugins/f7/index";


const __confirm = function (rejectMode, content, okText = "确定", cancelText = "取消") {
    return new Promise((resolve, reject) => {
        f7Ready.then(app=>{
            app.dialog.confirm({
                title: '请确认',
                content,
                okText,
                cancelText,
                callbackOk: function () {
                    if (rejectMode) {
                        resolve();
                    } else {
                        resolve(true);
                    }
                },
                callbackCancel: _ => {
                    if (rejectMode) {
                        reject("");
                    } else {
                        resolve(false);
                    }
                },
            })
        })
    })
};

export const $confirm = __confirm.bind(null, true);
export const $confirm2 = __confirm.bind(null, false);


export const $alert = function(text, title){
    return new Promise((resolve, reject) => {
        f7Ready.then(app=>{
            app.dialog.alert(text, title, resolve);
        })
    })
}


export const notification = function(text, title="", icon= '<i class="f7-icons cl-red">exclamationmark_octagon_fill</i>', closeTimeout=3000){
    return f7Ready.then(app=>{
        let noti =  app.notification.create({
            icon,
            title,
            titleRightText: 'now',
            text,
            closeTimeout,
        });
        noti.open();
        return noti;
    })
}