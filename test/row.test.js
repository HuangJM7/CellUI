const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

    it('存在.', () => {
        expect(Row).to.exist
    })
    //不接受done,默认为同步代码,不等待异步代码
    //接受done,等待异步代码,完成后调用done结束任务
    it('接收 gutter 属性.', (done) => {
        Vue.component('g-row', Row)
        Vue.component('g-col', Col)
        //通过HTML添加子组件
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
             <g-row gutter="20">
                <g-col span="12"></g-col>
                <g-col span="12"></g-col>
             </g-row>
             `
        const vm = new Vue({
            el: div
        })
        //设置延时测试CSS属性,因为vue的创建挂载中存在异步任务
        setTimeout(() => {
            const row = vm.$el.querySelector('.row')
            expect(getComputedStyle(row).marginLeft).to.eq('-10px')
            expect(getComputedStyle(row).marginRight).to.eq('-10px')
            const cols = vm.$el.querySelectorAll('.col')
            expect(getComputedStyle(cols[0]).paddingRight).to.eq('10px')
            expect(getComputedStyle(cols[1]).paddingLeft).to.eq('10px')
            done()
            vm.$el.remove()
            vm.$destroy()
        })
    })
    it('接收 align 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'right'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
        div.remove()
        vm.$destroy()
    })

}) 