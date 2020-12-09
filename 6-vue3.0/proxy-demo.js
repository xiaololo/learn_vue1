// const data = {
//     name: 'lili',
//     age: 20,
// }
const data =['a','b','c']
const proxyData = new Proxy(data, {
    // target：目标对象、 key：被捕获的属性名、receiver：Proxy或者继承Proxy的对象
    get(target, key, receiver) {
        // 只处理本身（非原型）的属性
        const ownKeys = Reflect.ownKeys(target)
        if (ownKeys.includes(key)) {
            console.log('get',key)//监听
        }
        const result = Reflect.get(target, key, receiver)
        return result //返回结果
    },
    // value 新属性值。
    set(target, key, value, receiver) {
        // 重复的数据不处理
        const result = Reflect.set(target, key, value, receiver)
        console.log('set', key, value) //set age 30
        console.log('result', result) //result true
        return result //是否设置成功
    },
    deleteProperty(target, key) {
        const result = Reflect.deleteProperty(target, key)
        console.log('delete property', key) //delete property name
        console.log('result', result) //result true
        return result //是否删除成功
    },
})
// 对象操作
// proxyData.age // get操作
// proxyData.age = 30 // set操作
// delete proxyData.name // 删除操作


// 数组操作
proxyData.push('d')
// get push
// get length
// set 3 d
// result true
// set length 4
// result true

// 只处理非原型的属性
// const ownKeys = Reflect.ownKeys(target)
// if (ownKeys.includes(key)) {
//     console.log('get', key) //监听
// }

// get length
// set 3 d
// result true
// set length 4
// result true



// 前置知识
// Proxy ES6语法 对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）。
// Proxy 可以理解成， 在目标对象之前架设一层“ 拦截”， 外界对该对象的访问， 都必须先通过这层拦截， 因此提供了一种机制， 可以对外界的访问进行过滤和改写。

// 语法：const p = new Proxy(target, handler)
// target 要使用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）
// handler 一个通常以函数作为属性的对象， 各属性中的函数分别定义了在执行各种操作时代理 p 的行为。
// handler.get() 方法用于拦截对象的读取属性操作。
// handler.set() 方法是设置属性值操作的捕获器。
// handler.deleteProperty() 方法用于拦截对对象属性的 delete 操作

// Reflect 是一个内置的对象，它提供拦截 JavaScript 操作的方法这些方法与proxy handlers的方法相同。
// Reflect.get(target, propertyKey[, receiver]) 
// Reflect.deleteProperty(target, propertyKey)
// Reflect.set(target, propertyKey, value[, receiver])
// target： 需要取值的目标对象； key： 需要获取的值的键值；value:：设置的值。 
// 如果target对象中指定了getter， receiver则为getter调用时的this值