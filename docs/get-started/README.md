# 快速开始

[![Build Status](https://travis-ci.com/HuangJM7/UnitUI.svg?branch=master)](https://travis-ci.com/HuangJM7/UnitUI)

## 介绍

这是我在学习 Vue 过程中做的一个 UI 框架，提供了一些常用组件，适合 PC 端和移动端使用，希望对你有用。 

## 组件内容
Icon 图标、Button 按钮、Input 输入框、Tabs 便签页、Grid 网格、Layout 布局、Popover 弹出层、Collapse 手风琴、Toast 提示输入框
## 开始使用

### 1. 添加 CSS 样式
  使用本框架前，请在 CSS 中开启 border-box

  ``` css
  *,*::before,*::after{box-sizing: border-box;}
  ```
  IE 8 及以上浏览器都支持此样式。

### 2. 安装 unit-ui
  ``` bash
  npm install unit-ui
  ```
  或
  ``` bash
  yarn add unit-ui
  ```
### 3. 引入 unit-ui

#### 3.1完整引入

  在 main.js 中写入以下内容：
  ``` js
import UnitUI from 'unit-ui'
import 'unit-ui/dist/index.css'
Vue.use(UnitUI);

new Vue({
   el: '#app',
   render: h => h(App)
});
  ```
#### 3.2局部引入
  在 main.js 中写入以下内容：
  ``` js
  import {Button, Icon} from 'unit-ui'
  import 'unit-ui/dist/index.css'

  export default {
    name: 'app',
    components: {
      'u-button': Button,
      'u-icon': Icon
    }
  }
  ```
完整组件列表及引用方式
``` js
import {Button, ButtonGroup, Icon, Input, Row, Col, Layout, Header, Sider, Content, Footer, plugin, Tabs, TabsHead, TabsBody, TabsItem, TabsPane, Popover, Collapse, CollapseItem} from 'unit-ui'
 ```
