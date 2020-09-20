import View from './krouter-view'
import Link from './krouter-link'

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
        // Vue.util.defineReactive(this, 'current', '/');
        this.current = window.location.hash.slice(1) || "/";
        Vue.util.defineReactive(this, 'matched',[]);
        // match 可以递归遍历路由表，获得匹配关系的数组
        this.match();

        // 监控url变化
        window.addEventListener('hashchange', this.onHashChange.bind(this));
        window.addEventListener('load', this.onHashChange.bind(this));

        // 创建一个路由映射表
        /*
        this.routeMap = {};
        options.routes.forEach(route => {
            this.routeMap[route.path] = route
        })
        */

    }

    // 方法提取
    onHashChange() {
        console.log(window.location.hash);
        this.current = window.location.hash.slice(1)
        this.matched = [];
        this.match()
    }

    match(routes) {
        routes = routes || this.$options.routes
        // 递归遍历
        for (const route of routes) {
            if (route.path === '/' && this.current === '/') {
                this.matched.push(route)
                return
            }
            // 当前地址 about/info
            if (route.path !== '/' && this.current.indexOf(route.path) !== -1) {
                this.matched.push(route);
                if (route.children) {
                    this.match(route.children)
                }
                return
            }
        }
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
    Vue.component('router-link',Link);

    Vue.component('router-view',View);
};

export default KVueRouter

