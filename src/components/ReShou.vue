<template>
  <ul class="boxhot"  >
    <div v-if="this.weibos" ref="ulbox">
      <li  v-for="item in this.weibo" :key="item.hot" ><a :href="item.url" target="_blank">{{item.name}}</a></li>
    </div>
    <div v-if="this.zhihus" ref="ulbox">
      <li  v-for="item in this.zhihu" :key="item.name" ><a :href="item.url" target="_blank">{{item.name}}</a></li>
    </div>
    <div v-if="this.baidus" ref="ulbox">
      <li  v-for="item in this.baidu" :key="item.hot" ><a :href="item.url" target="_blank">{{item.name}}</a></li>
    </div>
    <div v-if="this.bilis" ref="ulbox">
      <li  v-for="item in this.bili" :key="item.name" ><a :href="item.url" target="_blank">{{item.name}}</a></li>
    </div>
    
  </ul>
</template>

<script>
  import axios from 'axios';
export default {
  props: {
    weibos: {
      default: true
    },
    bilis: {
      default: false
    },
    zhihus: {
      default: false
    },
    baidus: {
      default: false
    }
  },
  data() {
    return {
      weibo: [],
      zhihu: [],
      baidu: [],
      bili: [],
    }
  },

  methods: {
  },
  async created() {
    let weibodata = await axios.get('https://tenapi.cn/resou/')
    this.weibo = weibodata.data.list
    let zhihudata = await axios.get('https://tenapi.cn/zhihuresou/')
    this.zhihu = zhihudata.data.list
    let baidudata = await axios.get('https://tenapi.cn/baiduhot/')
    this.baidu = baidudata.data.list.slice(0,10)
    let bilidata = await axios.get('https://tenapi.cn/bilihot/')
    this.bili = bilidata.data.list.slice(0, 10)
    setInterval(async () => {
      let weibodata = await axios.get('https://tenapi.cn/resou/')
      this.weibo = weibodata.data.list
      let zhihudata = await axios.get('https://tenapi.cn/zhihuresou/')
      this.zhihu = zhihudata.data.list
      let baidudata = await axios.get('https://tenapi.cn/baiduhot/')
      this.baidu = baidudata.data.list.slice(0,10)
      let bilidata = await axios.get('https://tenapi.cn/bilihot/')
      this.bili = bilidata.data.list.slice(0, 10)
    },300000)
    // if (this.weibos) {
      
    // }
  },
  mounted() {
    let ulbox1 = this.$refs.ulbox
    let list = ulbox1.children
    window.onresize = function () {
      if (this.innerWidth < 650) {
        for (let i = 0; i < 10; i++) {
          list[i].style.width = '100%'
        }
      } else {
        for (let i = 0; i < 10; i++) {
          list[i].style.width = '50%'
        }
      }
    }
  },
  computed: {
    li() {
      if (this.weibos) {
        return '<li  v-for="item in this.weibo" :key="item.hot" ><a :href="item.url" target="_blank">{{item.name}}</a></li> '
      } else {
        return '不行'
      }
      
    }
  }
}
</script>

<style lang="less" scoped>
   * {
    margin: 0;
    padding: 0;
   }
  .boxhot {
    position: fixed;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
    color: white;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 5px;
    width: 52%;
    min-width: 320px;
    overflow: hidden;
    li {
      box-sizing: border-box;
      display: inline-block;
      width: 50%;
      height: 32px;
      white-space: nowrap;
      overflow: hidden;
      &:hover {
          background-color: #4a4a4a;
          a {
            color: white;
          }
        }
      a {
        box-sizing: border-box;
        display: inline-block;
        text-decoration: none;
        color: #171717;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        font-weight: 500;
        width: 100%;
        height: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        height: 100%;
      }
    }
  }
</style>