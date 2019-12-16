const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'
import { afterEach } from 'mocha';

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Input', () => {

    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe("props", () => {
        const Constructor = Vue.extend(Input)
        let vm;
        afterEach(() => {
            vm.$destroy()
        })
        it('接受Value.', () => {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.be.eq('1234')
            vm.$destroy()
        })
        it('接受 disabled.', () => {
            vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.be.eq(true)
            vm.$destroy()
        })
        it('接受 readonly.', () => {
            vm = new Constructor({
                propsData: {
                    readonly: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            // console.log(inputElement);
            // console.log(inputElement.outerHTML);
            // bug,readonly API要大写O
            expect(inputElement.readOnly).to.be.eq(true)
            vm.$destroy()
        })
        it('接受 error.', () => {
            vm = new Constructor({
                propsData: {
                    error: "error"
                }
            }).$mount()
            const useElement = vm.$el.querySelector('use')
            expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')
            const errprMessage = vm.$el.querySelector('span')
            expect(errprMessage.innerText).to.equal("error")
            vm.$destroy()
        })
    })
    describe("事件", () => {
        const Constructor = Vue.extend(Input)
        let vm;
        afterEach(() => {
            vm.$destroy()
        })
        //合并事件测试,测试支持v-model
        it('支持 change/input/focus/blur 事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName, callback)
                var event = new Event(eventName)
                //事件属性只读,不能直接添加
                Object.defineProperty(event, 'target', {
                    value: { value: "hi" }, enumerable: true
                })
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                //chai-sinon文档 
                expect(callback).to.have.been.calledWith('hi')
            })
        })
        // it('支持 input 事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('input', callback)
        //     var event = new Event('input')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     //chai-sinon文档 
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持 focus 事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('focus', callback)
        //     var event = new Event('focus')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     //chai-sinon文档 
        //     expect(callback).to.have.been.calledWith(event)
        // })
        // it('支持 blur 事件', () => {
        //     vm = new Constructor({}).$mount()
        //     const callback = sinon.fake()
        //     vm.$on('blur', callback)
        //     var event = new Event('blur')
        //     let inputElement = vm.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     //chai-sinon文档 
        //     expect(callback).to.have.been.calledWith(event)
        // })



    })

})