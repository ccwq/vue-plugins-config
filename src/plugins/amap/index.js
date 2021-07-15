import AMapLoader from '@amap/amap-jsapi-loader';
import merge from "lodash/merge";


const defaultOptions = {

    // 申请好的Web端开发者Key，首次调用 load 时必填
    "key": "3ea75554ba223f9d19e6e70e6a1d8363",
    // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    "version": "1.4.15",

    // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    "plugins": [
        //'AMap.Geolocation',
    ],
};


let _AMapPromise = "";

/**
 * 获取地图
 * @param option
 * @returns {Promise<any>}
 */
const getAMap = function (option = {}) {
    if (!_AMapPromise) {
        _AMapPromise = AMapLoader.load(
            merge({}, defaultOptions, option)
        ).catch(e => {
            _AMapPromise = null;
            console.warn("高德地图加载失败");
            console.error(e);
        });
    }

    return _AMapPromise;
};



/**
 * 定位
 * @param options
 * @returns {Promise<unknown>}
 */
export const getLocation = function (options = {}) {

    return getAMap().then(AMap => {

        options = Object.assign({}, {

            // 是否使用高精度定位，默认：true
            enableHighAccuracy: true,

            // 设置定位超时时间，默认：无穷大
            timeout: 10000,

            // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
            buttonOffset: new AMap.Pixel(10, 20),

            //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            zoomToAccuracy: true,

            //  定位按钮的排放位置,  RB表示右下
            buttonPosition: 'RB'
        }, options);

        return new Promise((resolve, reject) => {

            //异步使用插件
            AMap.plugin('AMap.Geolocation', function () {
                var geolocation = new AMap.Geolocation(options)

                geolocation.getCurrentPosition(function (status, result) {
                    if (status == 'complete') {
                        resolve(result)
                    } else {
                        reject(result)
                    }
                });
            })
        })
    });
};


