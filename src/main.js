import Vue from 'vue'
import App from './App.vue'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faPlus, faCheck, faTrash, far, fab);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
    render: (h) => h(App),
}).$mount("#app");