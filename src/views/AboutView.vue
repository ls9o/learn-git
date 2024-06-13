<template>
  <ThisIsAbout/>
</template>

<script>
import ThisIsAbout from '@/components/ThisIsAbout.vue';
import { Options, Vue } from 'vue-class-component';


@Options({
  components: {
    ThisIsAbout
  },
})
export default class HomeView extends Vue {}
</script>

<style>
/* Add your styles here */
</style>
