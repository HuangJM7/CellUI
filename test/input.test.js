const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false


describe('Input', () => {

    it('存在.', () => {
        expect(Input).to.be.ok
    })
    describe("props", () => {
        it('接受Value.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.value).to.be.eq('1234')
            vm.$destroy()
        })
        it('接受 disabled.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
                propsData: {
                    disabled: true
                }
            }).$mount()
            const inputElement = vm.$el.querySelector('input')
            expect(inputElement.disabled).to.be.eq(true)
            vm.$destroy()
        })
        it('接受 readonly.', () => {
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
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
            const Constructor = Vue.extend(Input)
            const vm = new Constructor({
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


})