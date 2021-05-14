import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
//import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
//import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueGlobalVariable from 'vue-global-var';
import { User } from './types/User';

Vue.config.productionTip = false;
//import './app.scss'
//Vue.use(bootstrap)
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin)
Vue.use(VueGlobalVariable, {
  // store,
  globals: {
    user: new User('user1'),
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
Vue.prototype.$gunnarName = 'Gunnar App'
