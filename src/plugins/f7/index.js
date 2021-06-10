import Framework7 from 'framework7/framework7-lite.esm.bundle.js'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
import "framework7/css/framework7.bundle.min.css";

let photoBrowser;

/**
 * 图标
 * 需要单独安装
 * yarn add framework7-icons
 */
import "framework7-icons";
import "./f7.less";
import BPromise from "ipro/src/promise/BPromise";

Framework7.use(Framework7Vue);


/**
 * 程序初始化完成
 * @type {BPromise}
 */
export const f7Ready = new BPromise();


f7Ready.then(f7 => {
    window._f7 = f7;

    photoBrowser = f7.photoBrowser.create({
        navbarOfText:"/",
        pageBackLinkText:"返回",
        popupCloseLinkText:"关闭",
        type:"popup",
        photos: [],
    });
});


export const markF7Ready = function(app){
    f7Ready._resolve(app);
}


/**
 * 显示图片
 * @param ls
 *
 * 简单配置
 * @params ls.0 url
 *
 * 复杂配置
 * @params ls.0.url url
 * @params ls.0.caption caption
 * @param index
 * @returns {Promise<void>}
 */
export const broswerImage = function (ls, index = 0) {
    return ready.then(f7 => {
        if (!Array.isArray(ls)) {
            ls = [ls];
        }
        photoBrowser.params.photos = ls;
        photoBrowser.open(index)
        photoBrowser.$el.addClass("global-photo-broswer")
    })
};

