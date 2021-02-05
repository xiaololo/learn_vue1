// const data = {
//     name: 'lili',
//     age: 20,
// }
const data =['a','b','c']
const proxyData = new Proxy(data, {
    get(target, key, receiver) {
        const result = Reflect.get(target, key, receiver)
        console.log('get', key) //监听
        return result //返回结果
    },
    set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver)
        console.log('set', key, value) //set age 30
        return result //是否设置成功
    },
    deleteProperty(target, key) {
        const result = Reflect.deleteProperty(target, key)
        console.log('delete property', key) //delete property name
        return result //是否删除成功
    },
})
// 对象操作
// proxyData.age // get操作
// proxyData.age = 30 // set操作
// proxyData.sex = "女" // set操作
// delete proxyData.name // 删除操作


// 数组操作
proxyData.push('d')
// get push  push()方法触发
// get length
// set 3 d 
// set length 4
