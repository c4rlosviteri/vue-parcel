<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>\{{ mensaje }}</h1>
    <github-contribution :link="link">Contribuye al proyecto en GitHub</github-contribution>
  </div>
</template>

<script>
import GithubContribution from './components/GithubContribution';

export default {
  name: 'app',
  data: () => ({
    link: 'https://github.com/c4rlosviteri/vue-parcel',
    mensaje: 'Bienvenido a tu aplicación Vue.js + Parcel'
  }),
  components: {
    GithubContribution
  }
};
</script>

<style>
#app {
  font-family: sans-serif;
  margin: 60px 0;
  text-align: center;
}

h1 {
  color: #4fc08d;
  font-weight: normal;
}
</style>
