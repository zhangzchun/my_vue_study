import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

// 告诉webpack 创建一个以svg目录为上下文的 require 函数
const req = require.context('./svg', false, /\.svg$/)
// keys() 获取所有svg 文件
req.keys().map(req);

Vue.component('svg-icon', SvgIcon)
