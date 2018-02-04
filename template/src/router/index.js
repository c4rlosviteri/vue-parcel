import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

// Views
import GithubContribution from './../components/GithubContribution';

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'GithubContribution',
      component: GithubContribution
    }
  ]
});
