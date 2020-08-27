// 响应式
const obj = {}

function defineReactive(obj,key,val) {
    // 对传入的 obj 进行访问的拦截
    Object.defineProperty(obj,key,{
        get() {
            console.log("get: "+key);
            return val
        },
        set(newVal) {
            if (newVal != val) {
                console.log("set: "+ key +": "+newVal);
                val = newVal;
            }
        }
    })
}

defineReactive(obj, 'foo', 'foo')
obj.foo
obj.foo = 'fooooooooooooooooo'


