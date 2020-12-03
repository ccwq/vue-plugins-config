import Framework7 from 'framework7/framework7-lite.esm.bundle.js'
import Framework7Vue from 'framework7-vue/framework7-vue.esm.bundle.js'
import "framework7/css/framework7.bundle.min.css";


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
export const ready = new BPromise();


ready.then(f7 => {
    window._f7 = f7
});
