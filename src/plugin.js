import Toast from './toast'

export default {
    install(Vue, option) {
        //2 js动态创建vue组件实例
        Vue.prototype.$toast = function (message, toastOption) {
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = message //插槽默认内容
            toast.$propsData = {
                ...toastOption
            }
            toast.$mount()
            document.body.appendChild(toast.$el)
        };



        //1 原生JS创建div
        // Vue.prototype.$toast = function (message) {
        //     var div = document.creatElement('div')
        //     div.testContent = message
        //     document.body.appendChild(div)
        // };
    }
}