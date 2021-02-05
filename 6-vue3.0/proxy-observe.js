// 创建响应式
function reactive(target = {}) {
  if (typeof target != 'object' || target == null) {
    // 不是对象或者数组，则返回
    return target
  }
  // 代理配置 生成代理对象
  return observed = new Proxy(target, {
    // target：目标对象、 key：被捕获的属性名、receiver：Proxy或者继承Proxy的对象
    get(target, key, receiver) {
      // 只监听 处理本身（非原型）的属性 ,如push()
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('get', key) //监听
      }
      const result = Reflect.get(target, key, receiver)
      // return result //返回结果
      // 深度监听
      // 性能如何提升的？
      return reactive(result) //递归get处理 实现深度监听
    },
    // value 新属性值。
    set(target, key, value, receiver) {
      // 判断是否是新增属性
      const ownKeys = Reflect.ownKeys(target)
      if (ownKeys.includes(key)) {
        console.log('已有的 key') //监听
      } else {
        console.log('新增的 key')
      }
      // 重复的数据不处理
      const oldVal = target[key]
      if (value === oldVal) {
        return true
      }
      const result = Reflect.set(target, key, value, receiver)
      console.log('set', key, value) //set age 30
      return result //是否设置成功
    },
    deleteProperty(target, key) {
      const result = Reflect.deleteProperty(target, key)
      console.log('delete property', key) //delete property name
      console.log('result', result) //result true
      return result //是否删除成功
    },
  })

}


// 测试数据
const data = {
  name: 'lili',
  age: 20,
  info: {
    city: "beijing"
  }
}
const proxyData = reactive(data)

// proxyData.age
// get age
// 26

// ---------判断已有的还是新增的key----------
// 在set方法中判断
//  const ownKeys = Reflect.ownKeys(target)
//  if (ownKeys.includes(key)) {
//      console.log('已有的 key') //监听
//  } else {
//      console.log('新增的 key')
//  }

// proxyData.age=30 //原有的
// 已有的 key
// set age 30
// proxyData.age1=40  // 新增的
// 新增的 key
// set age1 40


// ---------深度监听----------

// proxyData.info
// get info
// {city: "beijing"}

// proxyData.info.city
// get info
// "beijing"

// 获取 proxyData.info.city， 没有获取 city，需要深度监听
// 解决：在get方法里：
// return reactive(result) //递归get处理 实现深度监听，

// proxyData.info.city
// get info
// get city
// "beijing"


// -----------性能如何提升-----------
// vue2 .0 响应式是开始做的递归处理，
//  vue3 .0是在get方法做的递归,get到哪一层级递归到哪一层级