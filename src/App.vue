<template>
  
    <div class="app1">
      <my-nav></my-nav>
      <users-position></users-position>
      <MyTime></MyTime>
      <NavList></NavList>
    </div>
  
</template>

<script>
import MyNav from './components/MyNav.vue';
import UsersPosition from './components/UsersPosition.vue';
import MyTime from './components/MyTime.vue';
import NavList from './components/NavList';


export default {
  components: {
    MyNav,
    UsersPosition,
    MyTime,
    NavList,
}

}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.app1 {
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
</style>