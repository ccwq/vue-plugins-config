import Vue from 'vue'
import "view-design/dist/styles/iview.css"
import "./iview-variables.less";
// import vd from 'view-design'
// Vue.use(vd);

/*按需加载配置
// .babelrc
{
  "plugins": [["import", {
    "libraryName": "view-design",
    "libraryDirectory": "src/components"
  }]]
}
*/


// import vd from "view-design"; Vue.use(vd);

import {
    Input,
    Button,
    Table,
    Message,
    Divder
} from "view-design";


Vue.component("Input", Input);
Vue.component("Button", Button);
Vue.component("Table", Table);
Vue.component("Message", Message);



Divider.props.orientation.default = "left";
Divider.props.size.default = "small";






