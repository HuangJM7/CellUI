const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.config.productionTip = false
Vue.config.devtools = false

//BDD 行为驱动测试,更接近自然语言
//describe,it函数属于mocha,自动引入
describe('Popover', () => {
    //it函数隔绝作用域,并添加测试名
    // it('测试test文件.', () => {
    //     expect([1,2]).to.eq([1,2])
    // })

    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    it('存可以设置position', (done) => {
        Vue.component('u-popover', Popover)
        //通过HTML添加子组件
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <u-popover position="bottom" ref="temp">
          <template slot="content">
          弹出内容
          </template>
          <button>点我</button>
        </u-popover>
        `
        const vm = new Vue({
            el: div
        })
        //点击展示 content
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            //通过ref获取popover
            const { content } = vm.$refs.temp.$refs
            expect(content.classList.contains('position-bottom')).to.be.true
            done()
        })
    })
    //xit skipped跳过测试
    xit('存可以设置 trigger', (done) => {
        Vue.component('u-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <u-popover position="bottom" ref="temp">
          <template slot="content">
          弹出内容
          </template>
          <button>点我</button>
        </u-popover>
        `
        const vm = new Vue({
            el: div
        })
        //hover展示 content
        let event = new Event('mouseenter')
        vm.$refs.temp.$el.dispatchEvent(event)
        vm.$nextTick(() => {
            //通过ref获取popover
            const { content } = vm.$refs.temp.$refs
            expect(content).to.exist
            done()
        })
    })
})