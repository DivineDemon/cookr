import { createApp } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faBell,
  faBars,
  faXmark,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/tailwind.css";

// Icons
library.add(faBell);
library.add(faBars);
library.add(faXmark);
library.add(faTwitter);
library.add(faFacebook);
library.add(faInstagram);
library.add(faChevronDown);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
