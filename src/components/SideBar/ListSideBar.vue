<template>
  <div class="ListSideBar">
    <ul class="ListsideBar">
      <li><router-link to="/ThisPage2" class="router-link">Home</router-link></li>
      <li><router-link to="/ThisIsAbout" class="router-link">About</router-link></li>
      <li><router-link to="/" class="router-link">Processes</router-link></li>
    </ul>
    <div class="collapse-icon"></div>
  </div>
</template>

<script>
export default {
  name: 'ListSideBar'
};
</script>

<style scoped lang="scss">
@import '../sass/_listsidebar.scss';
</style>
