import AlertModal from './AlertModal.vue'

export default {
    install(Vue) {
        const AlertModalConstructor = Vue.extend(AlertModal)
        const Instance = new AlertModalConstructor().$mount()
        document.body.appendChild(Instance.$el)
        Object.defineProperty(Vue.prototype, '$Alert', {
            value: Instance.add,
        })
    },
}
