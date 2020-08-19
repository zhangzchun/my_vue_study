let Vue; // 引用构造函数，VueRouter中要使用

// 1.实现一个插件：挂载$router
class KVueRouter {
    constructor(options) {
        this.$options = options
        console.log(this.$options);

        // this.current = '/';
        // 需要创建响应式的current属性
        // 利用Vue提供的defineReactive做响应化
        // 这样将来current变化的时候，依赖的组件会重新render
        Vue.util.defineReactive(this, 'current', '/');
        // 监控url变化
        window.addEventListener('hashchange', this.onHashChange.bind(this));
        window.addEventListener('load', this.onHashChange.bind(this))
    }

    // 方法提取
    onHashChange() {
        console.log(window.location.hash);
        this.current = window.location.hash.slice(1)
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

    // 任务2：实现两个全局组件router-link和router-view
    Vue.component('router-link',{
        props: {
            to: {
                type: String,
                required: true
            },
        },
        // template:'' // template or render function not defined.
        render(h) {
            // <a href="#/about">abc</a>
            // <router-link to="/about">xxx</router-link>
            // h(tag, data, children)
            console.log(this.$slots);
            return h('a', { attrs: { href: '#' + this.to } }, this.$slots.default)
            // return <a href={'#' + this.to}>{this.$slots.default}</a>
        }
    });

    Vue.component('router-view',{
        render(h) {
            // return h('div','router-view')
            // 获取path对应的 component
            let component = null;
            this.$router.$options.routes.forEach(route =>{

                if (route.path == this.$router.current) {

                    component = route.component
                }
            });
            return h(component)
        }
    });
};

export default KVueRouter

