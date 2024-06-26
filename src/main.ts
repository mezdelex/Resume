import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import App from "@/App.vue";
import Button from "primevue/button";
import Card from "primevue/card";
import Fieldset from "primevue/fieldset";
import PrimeVue from "primevue/config";
import ProgressSpinner from "primevue/progressspinner";
import ScrollTop from "primevue/scrolltop";
import Sidebar from "primevue/sidebar";
import Skeleton from "primevue/skeleton";
import Timeline from "primevue/timeline";
import router from "@/router/router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import { faBriefcase, faCamera, faCode, faFolder, faGlobe, faImage, faList } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import "animate.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/luna-amber/theme.css";

library.add(faBriefcase, faCamera, faCode, faFolder, faGlobe, faImage, faList);

createApp(App)
  .use(PrimeVue, { ripple: true })
  .use(router)
  .component("Accordion", Accordion)
  .component("AccordionTab", AccordionTab)
  .component("Button", Button)
  .component("Card", Card)
  .component("Fieldset", Fieldset)
  .component("ProgressSpinner", ProgressSpinner)
  .component("ScrollTop", ScrollTop)
  .component("Sidebar", Sidebar)
  .component("Skeleton", Skeleton)
  .component("Timeline", Timeline)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
