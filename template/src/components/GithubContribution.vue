<template>
  <div class="github-contribution">
    <h1>vue-parcel</h1>
    <img src="./../assets/logo.png" alt="vue-parcel" class="github-contribution__img">
    <a :href="link" class="github-contribution__button">Contribute to this project</a>
  </div>
</template>

<script>
export default {
  name: 'github-contribution',
  data: () => ({
    link: 'https://github.com/c4rlosviteri/vue-parcel'
  })
};
</script>

<style scoped>
.github-contribution {
  margin: 20px 0;
  text-align: center;
}
.github-contribution__img {
  margin: 12px 0;
}
.github-contribution__button {
  background-color: #00c385;
  border-radius: 2px;
  box-shadow: 0 4px 0 #00a56e;
  color: #fff;
  display: inline-block;
  padding: 16px 20px;
  text-decoration: none;
}
</style>
