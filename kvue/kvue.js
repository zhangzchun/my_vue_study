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


// 创建kVue 函数
class KVue {
    constructor(options) {
        // 保存选项
        // 保存选项
        this.$options = options;
        this.$data = options.data;

        // 响应化处理
        observe(this.$data)


    }
}


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

}