import Vue from 'vue'
import ECharts from 'vue-echarts'
import chinaMap from '../assets/china.json'

Vue.config.productionTip = false

ECharts.registerMap('china', chinaMap)
Vue.component('chart', ECharts)
