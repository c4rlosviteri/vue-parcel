import Vue from 'vue';
import App from './App.vue';
{{#router}}
import router from './router';
{{/router}}

new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  render: h => h(App)
});
