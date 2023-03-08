import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/tailwind.css";

// Icons
library.add(faBars);
library.add(faTwitter);
library.add(faFacebook);
library.add(faInstagram);
library.add(faChevronDown);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
