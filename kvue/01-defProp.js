/* 1----- */
/*
// 响应式
const obj = {}
*/

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

    Object.keys(obj).forEach(key => {
        defineReactive(obj, key, obj[key])
    })
}

/*
* 不需要*/
/*
defineReactive(obj, 'foo', 'foo')
obj.foo
obj.foo = 'fooooooooooooooooo'
*/
/* 2------ */
// 响应式
const obj = { foo: 'foo', bar: 'bar', baz: { a: 1 }, arr: [1,2,3] }

// 遍历做响应化处理
observe(obj)
obj.foo
obj.foo = 'fooooooooooooooo'
obj.bar
obj.bar = 'barrrrrrrrrrrrrr'
// obj.baz.a = 10 // no ok
/* -- 添加遍历递归可解决 -- */
/* 2------ */

/* 3------ */
obj.baz = {a:100}
obj.baz.a = 100000


