import Vue from 'vue'
import App from './App.vue'


// registering components GLOBALLY

// import Header from './Header.vue'
// import Footer from './Footer.vue'
// import ServerDetails from './ServerDetails.vue'
// import Servers from './Servers.vue'

// Vue.component('app-header', Header);
// Vue.component('app-footer', Footer);
// Vue.component('server-details', ServerDetails);
// Vue.component('servers-list', Servers);

new Vue({
  el: '#app',
  render: h => h(App)
})
