<template>
    <div >
      <this-page-2></this-page-2>
    </div>
  </template>

  <script lang="ts">
import ThisPage2 from "@/components/ThisPage2.vue";
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    ThisPage2
  },
})
export default class HomeView extends Vue {}
</script>

<style>

</style>