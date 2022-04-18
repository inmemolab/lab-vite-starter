// Import Vue
import { createApp } from "vue";
// Import vueuse/head
import { createHead } from "@vueuse/head";
// Import Store
import { createPinia } from "pinia";
// Import Pinia Persist
import piniaPersist from "pinia-plugin-persist";
// Import i18
import moment from "moment";
// Import i18
import { createI18n } from "@/plugins/i18n";
// Import Routes
import router from "@/router";
// Import moment
// Import Styles
import "@/assets/custom.scss";
//Import App
import App from "@/layouts/App.vue";
// Create
const app = createApp(App);
const head = createHead();
const pinia = createPinia();
const i18n = createI18n();
// Use vueuse/head
app.use(head);
// Set Pinia-Persist
pinia.use(piniaPersist);
// Use Store
app.use(pinia);
// Use i18n
app.use(i18n);
// Use Router
app.use(router);
// Set windows on top allways
router.beforeEach(function (to, from, next) {
  window.scrollTo(0, 0);
  next();
});
// Provide Moment
app.provide("moment", moment);
// Mount App
app.mount("#app");
