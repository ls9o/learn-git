<template>
  <nav>
    <ThisHeader/>
    <ListSideBar/>
  </nav>
  <router-view/>
</template>

<script>
import ListSideBar from '@/components/SideBar/ListSideBar'
import ThisHeader from '@/components/SideBar/ThisHeader.vue'
export default {
  components: { 
    ListSideBar,ThisHeader
  },
}
</script>

<style>
</style>
