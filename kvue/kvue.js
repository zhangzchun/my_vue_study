function defineReactive(obj,key,val) {
    // 递归
    observe(val);

    // 对传入的 obj 进行访问的拦截
    Object.defineProperty(obj,key,{
        get() {
            console.log("get: "+key);
            return val
        },
        set(newVal) {
            if (newVal != val) {
                console.log("set: "+ key +": "+newVal);
                // 如果传入的newVal依然是obj，需要做响应化处理
                observe(newVal)
                val = newVal;

                // 通知更新
                watchers.forEach(w =>w.update())
            }
        }
    })
}

function observe(obj) {
    if (typeof obj !== 'object' || obj == null) {
        // 希望传入的是obj
        return
    }
    // 创建Observer实例
    new Observer(obj)

}

// 代理函数，方便用户直接访问$data中的数据
function proxy(vm, sourceKey) {
    // vm[sourceKey]就是vm[$data]
    // 将$data中的key代理到vm属性中
    Object.keys(vm[sourceKey]).forEach(key => {
        // 将$data中的key代理到vm属性中
        Object.defineProperty(vm,key,{
            get() {
                return vm[sourceKey][key]
            },
            set(newVal) {
                vm[sourceKey][key] = newVal;
            }
        })
    });
}

// 创建kVue 函数
class KVue {
    constructor(options) {
        // 保存选项
        // 保存选项
        this.$options = options;
        this.$data = options.data;

        // 响应化处理
        observe(this.$data);

        // 代理
        proxy(this, '$data');

        // 创建编译器
        new Compiler(options.el, this);

    }
}

// 根据对象类型决定如何做响应化
class Observer {
    constructor(value) {
        this.value = value;
        // 判断其类型
        if (typeof value === 'object') {
            this.walk(value)
        }

    }

    // 对象数据响应化
    walk(obj) {
        Object.keys(obj).forEach(key => {
            defineReactive(obj, key, obj[key])
        })
    }

  // 数组数据响应化，待补充
}

// 观察者:保存更新函数，值发生变化调用更新函数
const watchers = []
class Watcher {
    constructor(vm,key,updateFn) {
        this.vm = vm;
        this.key = key;
        this.updateFn = updateFn

        watchers.push(this)

    }

    update() {
        this.updateFn.call(this.vm, this.vm[this.key])
    }
}