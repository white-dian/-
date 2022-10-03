<template>
  <div class="box" v-on:click="more" >
    <span class="iconfont more">&#xe6b8;</span>
  </div>
  <div class="nav" ref="nav">
    <div class="head">
      <span ref="close" v-on:click="closenav">></span>
      <div class="routerbox" ref="routerbox">
        <router-link @click="active($event)" to="/comnav">常用</router-link>
        <router-link @click="active($event)" to="/toolnav">工具</router-link>
        <router-link @click="active($event)" to= "/hapnav">娱乐</router-link>
      </div>
    </div>
    <router-view></router-view>
    
  </div>
  

</template>

<script>


export default {
  data() {
    return {
      status:false
    }
     
  },
  methods: {
    more() {
      this.$refs.nav.style.display = 'block'
      this.$router.push('/comnav')
      let abox = this.$refs.routerbox.children
      abox[0].style.backgroundColor = '#666'
    },
    closenav() {
      this.$refs.nav.style.display = 'none'
      this.$router.push('/')
      let abox = this.$refs.routerbox.children
      for (let i = 0; i < abox.length; i++) {
        abox[i].style.backgroundColor= ''
      }
    },
    active(e) {
      let abox = this.$refs.routerbox.children
      for (let i = 0; i < abox.length; i++) {
        abox[i].style.backgroundColor= ''
      }
      e.target.style.backgroundColor = '#666'
    }
    
    
  }
}
</script>

<style lang="less" scoped>
  a {
    text-decoration: none;
    color: white;
  }
  @font-face {
  font-family: 'iconfont';
  src: url('../assets/font_2agu1wokmcx/iconfont.ttf') format('truetype');
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 20px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  .box {
    position: absolute;
    right: 30px;
    top: 35px;
    font-size: 20px;
    color: white;
    span {
      cursor: pointer;
    }
  }
  .nav {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 100vh;
    background-color: #4a4a4a;
    box-shadow: -1px 1px 4px #333;
    overflow: auto;
    .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 36px;
      // background-color: pink;
      color: white;
      cursor: pointer;
      border-bottom:white 0.5px solid ;
      
      span {
        display: block;
        width: 24px;
        height: 36px;
        // background-color: skyblue;
        line-height: 36px;
        font-size: 30px;
        font-weight: 100;
        &:hover {
          background-color: #999;
        }
      }
      .routerbox {
        flex: 1;
        display: flex;
        justify-content: space-around;
        a {
          width: 33.3%;
          text-align: center;
          line-height: 36px;
          &:hover {
            background-color: #999;
          }
        }
      }
    }
    ul {
      list-style: none;
      color: white;
    }

  }
  .active {
    background-color: #666;
  }
</style>