import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuetify from 'vuetify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify: new Vuetify({
    dark: true,
    themes: {
      dark: {
        // Color is applied to selected drop down item
        primary: '#ff0079',
        secondary: '#8c14c5',
        accent: 'ffc100',

        // Uncomment this to make things worse
        // 'primary--text': '#FF00FF'
      },
    },
  }),
  render: (h) => h(App),
}).$mount('#app')
