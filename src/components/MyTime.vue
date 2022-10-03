<template>
  <div class="time">{{time}}</div>
</template>

<script>
export default {
  name: 'MyTime',
  created() {
    setInterval(() => {
      this.hour = new Date().getHours() > 9 ? new Date().getHours() : '0' + new Date().getHours()
      this.minu = new Date().getMinutes() > 9 ? new Date().getMinutes(): '0' + new Date().getMinutes()
      this.second = new Date().getSeconds() > 9 ? new Date().getSeconds(): '0' + new Date().getSeconds()
    },1000)
  },
  data() {
    return {
      hour: '00',
      minu: '00',
      second: '00',
    }
  },
  computed: {
    time() {
      return `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}  ${this.hour}:${this.minu}:${this.second}`
    }
  }
}
</script>

<style lang="less" scoped>
  .time {
    position: absolute;
    left: 25px;
    bottom: 15px;
    color: white;
    font-size: 18px;
  }
</style>