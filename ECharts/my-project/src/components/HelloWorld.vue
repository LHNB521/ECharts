<template>
    <div>
      <div id="main" ref="chart"></div>
    </div>
</template>

<script>
//import {http} from '../axios/http.js'
import Axios from 'axios'
//引入基本模板
let echarts = require("echarts");
//引入柱状图组件
require('echarts/lib/chart/bar')
//引入提示和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  name: "HelloWorld",
  data() {
    return {
     data1:{"name":[40,25,15,42,50,12,45]},
     data2:{"name":[19,5,45,62,80,2,5]},
   
    }
  },
  mounted() {
    this.echarts();
    this.getUserAccount()
  },
  methods:{
   getUserAccount(){
    Axios({
       method:'get',
       baseURL:'/api',
       url:'/api'
     }).then(res=>{
       console.log(res.data)
     }).catch(error=>{
       console.log(error)
     })
   },
   
    echarts(){
      let myChart=echarts.init(this.$refs.chart,null, {renderer: 'svg'})
      myChart.setOption({
        //点击隐藏
        legend:{
          data:['用例新增数目','测试执行数目'],
          left:'right',
          top:'30',
          orient:'',
          
        },
        toolbox:{   //功能菜单
          show:true,
          feature:{
            dataZoom:{
              yAxisIndex:'none'
            },          //区域放大
            dataView:{readOnly:true},
            magicType:{type:['line','bar']},   //折线、条形图
            // restore:{}
            saveAsImage: {}  //下载
          }
        },
        //X轴
        xAxis:{
          type:'category',
          data:['组织1','组织2','组织3','组织4','组织5','组织6','组织7','组织8']
        },
        //Y轴
        yAxis:{
          type:'value',
          name:'数量',
          axisLabel:{
            formatter:'{value}个'
          }
        },
        //数据呈现
        series:[
          {
            name:'用例新增数目',
            data:this.data1.name,
            type:'line'
          },
          {
            name:'测试执行数目',
            data:this.data2.name,
            type:'line',
            smooth:true,
            itemStyle : { //显示折点数
              normal: {
                label : {
                  show: true
                  }
                }
              }
          }
        ]

      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #main {
       width: 600px;
       height: 400px;  
  }
</style>