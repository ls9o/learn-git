<template>
  <div class="home">
    <h1><home-page/></h1>

  </div>
</template>

<script lang="ts">
import HomePage from '@/components/HomePage.vue';
import { Options, Vue } from 'vue-class-component';


@Options({
  components: {
    HomePage
  },
})
export default class HomeView extends Vue {}
</script>
