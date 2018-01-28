<template>
  <a :href="link" class="button">
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'github-contribution',
  props: {
    link: String
  }
};
</script>

<style scoped>
.button {
  background-color: #4fc08d;
  border-radius: 40px;
  color: white;
  padding: 16px 24px;
  text-decoration: none;
  transition: all .8s ease;
}
</style>
