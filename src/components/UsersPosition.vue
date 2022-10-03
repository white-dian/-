<template>
  <div class="box">
    <span class="aw">{{cityadd}}  {{wwweather}}</span>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      citycode: '',
      cityadd: '',
      wwweather:''
    }
      },
   async created() {
     
      const {data} = await axios.get('https://restapi.amap.com/v3/ip', { params: { key: 'ecccf69d4f66ac301863605f1a6c9279' } })
      if (data.status === '1') {
        const weather = await axios.get('https://restapi.amap.com/v3/weather/weatherInfo', { params: { key: 'ecccf69d4f66ac301863605f1a6c9279', city: data.adcode } })
      
        if (weather.status === 200) {
          const [my] = weather.data.lives
            this.wwweather = my.weather + ' '+ my.temperature + '℃'
        } 
            
            this.citycode = data.adcode
            this.cityadd =  data.city  
        } else {
          this.citycode = '无法获取位置信息'
          return;
        }

      }
  ,
  watch:{
    wwweather() {
     
    }
  }
}
</script>

<style lang="less" scoped>
 .box {
  position: fixed;
  top: 35px;
  left: 25px;
  font-size: 18px;
  .aw {
    color: white;
    cursor: default;
  }
 }
</style>