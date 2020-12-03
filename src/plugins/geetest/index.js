/**
 * 默认初始化geetest服务的地址
 * @type {string}
 */
const GEE_INIT_URL = "user/geetest/register";

import com from "./geetest";

com.props.initUrl.default = GEE_INIT_URL;

export default com;
