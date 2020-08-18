let Vue; // 引用构造函数，VueRouter中要使用

// 1.实现一个插件：挂载$router
class KVueRouter {
    constructor(options) {
        this.$options = options
    }
}

// 插件：实现install方法，注册$router
KVueRouter.install = function(_Vue) {
    // 引用构造函数，VueRouter中要使用
    Vue = _Vue;
    Vue.mixin({
        beforeCreate() {
            // 挂载$router 选项
            // 怎么获取根实例中的 router 选项
            // 只有根组件拥有router选项
            if (this.$options.router) {
                // vm.$router
                Vue.prototype.$router = this.$options.router;
            }
        }
    });
    
};

export default KVueRouter

