import Toast from './toast'

function createToast({ Vue, message, propsData }) {
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor(
        { propsData }
    )
    toast.$slots.default = [message] //插槽默认内容
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}

let currentToast

export default {
    install(Vue, option) {
        //2 js动态创建vue组件实例
        Vue.prototype.$toast = function (message, toastOption) {
            if (currentToast) {
                currentToast.close()
                currentToast = null
            }
            currentToast = createToast({ Vue, message, propsData: toastOption })

        };

        //1 原生JS创建div
        // Vue.prototype.$toast = function (message) {
        //     var div = document.creatElement('div')
        //     div.testContent = message
        //     document.body.appendChild(div)
        // };
    }
}