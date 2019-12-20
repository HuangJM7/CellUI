const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPane from '../src/tabs-pane'

Vue.component('u-tabs', Tabs)
Vue.component('u-tabs-head', TabsHead)
Vue.component('u-tabs-body', TabsBody)
Vue.component('u-tabs-item', TabsItem)
Vue.component('u-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })


    it('接受 selected 属性', (done) => {

        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
          <u-tabs selected="finance">
            <u-tabs-head>
              <u-tabs-item name="woman"> 美女 </u-tabs-item>
              <u-tabs-item name="finance"> 财经 </u-tabs-item>
              <u-tabs-item name="sports"> 体育 </u-tabs-item>
            </u-tabs-head>
            <u-tabs-body>
              <u-tabs-pane name="woman"> 美女相关资讯 </u-tabs-pane>
              <u-tabs-pane name="finance"> 财经相关资讯 </u-tabs-pane>
              <u-tabs-pane name="sports"> 体育相关资讯 </u-tabs-pane>
            </u-tabs-body>
          </u-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="finance"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })


    // describe('props', () => {
    //     it('接受 autoClose', (done) => {
    //         let div = document.createElement('div')
    //         document.body.appendChild(div)
    //         const Constructor = Vue.extend(Toast)
    //         const vm = new Constructor({
    //             propsData: {
    //                 autoClose: 1,
    //             }
    //         }).$mount(div)
    //         //在toast.vue  close方法内主动this.$emit("close")
    //         vm.$on('close', () => {
    //             expect(document.body.contains(vm.$el)).to.eq(false)
    //             done()
    //         })
    //     })

    // })
})
