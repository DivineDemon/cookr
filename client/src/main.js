import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

import App from "./App.vue";
import store from "./store";
import router from "./router";
import "@/assets/css/tailwind.css";

library.add(faGithub, faFacebook, faLinkedin, faStackOverflow);

createApp(App)
  .use(store)
  .use(router)
  .use(MotionPlugin)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
