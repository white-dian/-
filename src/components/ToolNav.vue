<template>
  <ul class="combox">
    <li v-for="item in comdata" :key="item.id"><input v-model='item.status' checked="item.status" type="checkbox" id="checkbox"><a target="_blank" :href="item.url">{{item.title}}</a></li>
  </ul>
  <div class="footer">
      <div class="footer1">
        <input type="checkbox" :checked="allcheckbox" id="all" @change="selectall($event)">
        <label for="all">全选</label>
      </div>
      <div class="footer2">
        <span @click="del">删除</span>
        <span @click="add">添加</span>
      </div>
      <div class="inp" ref="inp">
        <input type="text" v-model.trim="title" placeholder="输入网址说明">
        <input type="text" v-model.trim="url" placeholder="输入url">
        <button class="sure" @click="sure">确定</button>
        <button class="cancel" @click="cancel">取消</button>
      </div>
  </div>
  
</template>

<script>
  import {nanoid} from 'nanoid'
export default {
  data() {
    return {
      comdata: [
        { id: 1,  status:false,title:'铁路 12306', url: 'https://www.12306.cn/index/' },
        { id: 2,  status:false,title:'微信网页版', url: 'https://wx.qq.com/' },
        { id: 3,  status:false,title:'钉钉网页版', url: 'https://im.dingtalk.com/' },
        { id: 4,  status:false,title:'极客工具箱子', url: 'https://t.xxgeek.com/' },
        { id: 4,  status:false,title:'简书-创作你的创作', url: 'https://www.jianshu.com/' },

      ],
      title: '',
      url:''
    }
  },
  methods: {
    selectall(e) {
      let statusall = e.target.checked
      this.comdata = this.comdata.map((item) => {
        item.status = statusall
        return item
      })
    },
    del() {
      this.comdata = this.comdata.filter((item) => {
        return item.status == false
      })
    },
    add() {
      this.$refs.inp.style.display = 'block'
    },
    cancel() {
      this.$refs.inp.style.display = 'none'
      this.title=''
      this.url=''
    },
    sure() {
      if (this.title != '' && this.url != '') {
        let flagtitle = this.comdata.every((item) => {
          return item.title != this.title
        })
        let flagurl = this.comdata.every((item) => {
          return item.url != this.url
        })
        if (!flagtitle) {

          this.title = ''
          alert('title输入内容重复')
          return
        } else if (!flagurl) {
          this.url = ''
          alert('url输入内容重复')
          return
        }
         let obj = {}
        obj.id = nanoid()
        obj.status = false
        obj.title = this.title
        obj.url = this.url
        this.comdata.push(obj)
        this.title=''
        this.url=''
      } else {
        alert('输入不能为空')
      }
    }
  },
  computed: {
    allcheckbox() {
      return this.comdata.every((item) => {
        return item.status == true
      })
    }
  }
}
</script>

<style lang="less" scoped>
* {
  padding: 0;
  margin: 0;
} 
a {
  color: white;
  text-decoration: none;
}
ul {
  padding: 5px;
  li {
    display: flex;
    line-height: 24px;
    padding-top: 5px;
    padding-bottom: 10px;
    border-bottom: #808080 0.3px solid;
    align-items: center;
    &:hover {
      background-color: #999;
    }
    a {
      width: 250px;
    }
    input[type='checkbox'] {
      background-color: pink;
      width: 20px;
      height: 20px;
      margin-right: 10px;
      margin-left: 5px;
      
    }

  }
}
.footer {

      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      bottom: 0;
      // background-color: pink;
      height: 40px;
      width: 300px;
      color: white;
      border-top: 0.5px solid white;
      background-color: #4a4a4a;
      .footer1 {
        width: 100px;
        input[type='checkbox'] {
        width: 20px;
        margin-right: 10px;
        margin-left: 10px;
        line-height: 20px;
        }
      }
      .footer2 {
        flex: 1;
        display: flex;
        justify-content: space-around;
        span {
          cursor: pointer;
          display: block;
          line-height: 40px;
          flex: 1;
          text-align: center;
          &:hover {
            background-color: #999;
          }
        }
      }
    }
  .inp {
    display: none;
    position: absolute;
    bottom: 41px;
    right: 0;
    width: 100%;
    height: 160px;
    padding: 14px;
    box-sizing: border-box;
    background-color: #666;
    input[type='text'] {
      display:block;
      outline:none;
      width: 90%;
      height: 30px;
      border-radius: 20px;
      background-color: #4a4a4a;
      border: none;
      padding-left: 15px;
      margin-top: 10px;
      color: white;
      &::placeholder {
        color: #727272;
      }
      &:focus {
        color:white;
      }

    }
    button {
      width: 50px;
      height: 30px;
      outline: none;
      border: none;
      margin-top: 15px;
      border-radius: 4px;
      background-color: rgb(74, 74, 74);
      color: white;
      &:hover {
        background-color: white;
        color:#4a4a4a;
      }
      
    }
    .sure {
      margin-left: 5px;
      margin-right: 150px;
    }
  }
</style>