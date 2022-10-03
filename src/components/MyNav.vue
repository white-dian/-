<template>
  <div class="box" ref="box">
    <div class="search">
      <form :action="formUrl" target="_blank"  @submit.prevent="this.mySub" ref="one" >
        <input type="search" ref="mysearch" :placeholder="pH" class="inp" v-model="val" :name="inputName" autocomplete="off">
        <select class="sel iconfont" @change="this.optionChange">
          <option  class="opt" v-for="item in this.searchData" :key="item.id" :value="item.id">{{item.word}}</option>
        </select>
        <button class="but iconfont">&#xeafe;</button>
      </form>
    </div>
    <ReSou :weibos="weibostatus" :baidus="baidustatus" :bilis="bilistatus" :zhihus="zhihustatus"></ReSou>
  </div>
</template>
<script>
  import ReSou from '../components/ReShou.vue'
export default {
  components: {
    ReSou
  },
  data() {
    return {
      searchData: [
        { id: 1, url: 'https://fsoufsou.com/search', name: 'q', word:'F 搜', title:'开始使用F 搜'},
        { id: 2, url: 'https://www.bing.com/search', name: 'q', word:'Bing', title:'开始使用必应'},
        { id: 3, url: 'https://search.bilibili.com', name: 'keyword', word:'哔哩', title:'开始使用bilibili'},
        { id: 4, url: 'https://www.zhihu.com/search', name: 'q', word: '知乎', title: '开始使用知乎' },
        { id: 5, url: 'https://www.baidu.com/s', name: 'wd', word: '百度', title: '开始使用百度' },
        { id: 6, url: 'https://s.weibo.com/weibo', name: 'q',word: '微博',title: '开始使用微博'},
        { id: 7, url: 'https://m.sm.cn/s', name: 'q',word: '神马',title: '开始使用神马'},
        { id: 8, url: 'https://searx.be/search', name: 'q',word: 'SearX',title: '开始使用SearX'},

      ],
      inputName: 'q',
      pH: '开始使用F 搜',
      formUrl: 'https://fsoufsou.com/search',
      val: '',
      weibostatus: true,
      zhihustatus: false,
      baidustatus: false,
      bilistatus: false,

    }
  },
  methods: {
    optionChange(e) {
      const val = e.target.value * 1
      const [newData] = this.searchData.filter((item) => {
        return item.id ===  val
      })
      this.inputName = newData.name;
      this.pH = newData.title;
      this.formUrl = newData.url
      this.val = ''
      this.$refs.mysearch.focus()
      switch (val) {
        case 3:
          this.weibostatus = false
          this.zhihustatus = false
          this.baidustatus = false
          this.bilistatus = true
          break;
        case 4:
          this.weibostatus = false
          this.zhihustatus = true
          this.baidustatus = false
          this.bilistatus = false
          break;
        case 5:
          this.weibostatus = false
          this.zhihustatus = false
          this.baidustatus = true
          this.bilistatus = false
          break;
        default:
          this.weibostatus = true
          this.zhihustatus = false
          this.baidustatus = false
          this.bilistatus = false
      }
    },
    mySub(e) {
      if (this.val === '') {
        e.preventDefault()
        alert('搜索内容为空')
        return
      }
      e.target.submit()
      this.val = ''
    },
    
  },
  created() {
    function checkImgExists(imgurl) {
    return new Promise(function(resolve, reject) {
      var ImgObj = new Image();
      ImgObj.src = imgurl;
      ImgObj.onload = function(res) {
        resolve(res);
      }
      ImgObj.onerror = function(err) {
        reject(err)
      }
    })
    }

    checkImgExists('https://go.fuyeor.com/ran/pic').then(()=>{
        //success callback
        // console.log('有效链接')
        this.$refs.box.style.backgroundImage = "url('https://go.fuyeor.com/ran/pic')"
        
    }).catch(() => {
        
        //fail callback
        this.$refs.box.style.backgroundImage = `url(${require('../assets/背景.jpg')})`
        // console.log('无效链接')
    })

  }
}
</script>

<style lang="less" scoped>
@font-face {
  font-family: 'iconfont';
  src: url('../assets/font_6qfqpn14h0n/iconfont.ttf') format('truetype');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  padding: 0;
  margin: 0;
}
input {
  border: none;
}
.box {
  position: relative;
  width: 100vw;
  height: 100vh;
  min-height: 240px;
  // background: url(https://go.fuyeor.com/ran/pic) no-repeat;
  background-repeat:no-repeat;
  
  background-size: 100% 100%;
  
  .search {
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 350px;
    min-height: 50px;
    width: 54.6875vw;
    background-color: #4a4a4a;
    height: 3.3854vw;
    border-radius: 5.2083vw;
    overflow: hidden;
    form {
      display:flex;
      height: 100%;
      width: 100%;
      .inp {
        height: 100%;
        width: 82%;
        padding-left: 20px;
        padding-right: 20px;
        font-size: 18px;
        background-color: transparent;
        color: white;
        outline: none;
      }
      .sel {
        border: none;
        height: 100%;
        width: 8%;
        min-width: 60px;
        background-color: transparent;
        outline: none;
        color: white;
        cursor:pointer;
        option {
          color: white;
          height: 50px;
          width: 100px;
          font-size: 16px;
          background-color: #4a4a4a;
        }
      }
      .but { 
       border: none;
        height: 100%;
        width: 10%;
        min-width: 30px;
        background-color: transparent;
        color: white;
        font-size: 20px;
        cursor:pointer;
        line-height: 100%;
      }
    }
  }
}

</style>