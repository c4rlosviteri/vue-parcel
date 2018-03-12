<template>
  <div id="app">
    {{#router}}
    <router-view></router-view>
    {{else}}
    <github-contribution :link="link">Contribute to this project on GitHub</github-contribution>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import GithubContribution from './components/GithubContribution';

{{/unless}}
export default {
  name: 'app'{{#unless router}},
  components: {
    GithubContribution
  }{{/unless}}
};
</script>

<style>
#app {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
</style>
