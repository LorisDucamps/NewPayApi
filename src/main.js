import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VeeValidatePlugin from "./includes/validation";

createApp(App).use(router).use(VeeValidatePlugin).mount("#app");
