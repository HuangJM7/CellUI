import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'

Vue.component('u-button', Button)
Vue.component('u-icon', Icon)
Vue.component('u-button-group', ButtonGroup)
Vue.component('u-input', Input)

new Vue({
    el: '#app',
    data: {
        loading1: true,
    },
    methods: {
        inputChange(e) {
            console.log(e);

        }
    }
})

//单元测试,使用自动化测试代替
// import chai from 'chai'
// import spies from 'chai-spies'
// chai.use(spies)
// const expect = chai.expect

// //测试输入icon配置属性时,断言输出icon
// {
//     const Constructor = Vue.extend(Button)//获取button组件构造函数
//     const vm = new Constructor({//
//         propsData: {
//             icon: 'settings'
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-settings')
//     vm.$el.remove()//删除页面元素
//     vm.$destroy()//删除实例对象
// }
// //测试输入icon及loading配置属性,断言输出icon
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//             loading: true
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')
//     vm.$el.remove()
//     vm.$destroy()
// }
// //测试默认情况下icon的order
// {
//     //测试CSS属性,元素需要添加到页面中
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings'
//         }
//     })
//     vm.$mount(div)//挂载到页面中,CSS属性才有值
//     let svg = vm.$el.querySelector('svg')
//     let { order } = window.getComputedStyle(svg)//解构赋值,获取svg对象的order属性
//     expect(order).to.eq('1')//CSS属性值为字符串
//     vm.$el.remove()
//     vm.$destroy()
// }
// //测试输入iconPosition属性,断言输出icon的order为2
// {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//             iconPosition: 'right'
//         }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let { order } = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
// }
// //测试button是否监听click事件
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//         }
//     })
//     vm.$mount()

//     //1 实例监听click事件,回调函数中定义错误断言,当错误提示出现,说明监听到click事件
//     //无法做到监听事件成功,断言成功,使用mock(Chai Spies)进行优化
//     // vm.$on('click', function () {
//     //     expect(1).to.eq(2)
//     // })

//     //2 chai-spies的使用
//     let spy = chai.spy()//生成spy实例
//     vm.$on('click', spy)//将spy实例使用在original函数的位置

//     let button = vm.$el
//     button.click()//触发button元素的click事件

//     expect(spy).to.have.been.called();//断言 spy 是否被使用,需要在click事件后判断
// }