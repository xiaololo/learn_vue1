// 触发更新视图
function updateView() {
    console.log("视图更新")
}

//重新定义数组原型
const oldArrayProperty=Array.prototype;
// 创建新新对象，原型指向oldArrayProperty,再扩展新新的方法，不会影响原型
const arrProto = Object.create(oldArrayProperty);
['push','pop','shift','unshift','splice'].forEach(methodName=>{
    arrProto[methodName] = function () {
        updateView()//触发视图更新
        oldArrayProperty[methodName].call(this,...arguments)//
        // Array.prototype.push.call(this,...arguments) 真正数组原型的处理
    }
});


// 定义自定义属性，监听起来
function defineReactive(target, key, value) {
    //深度监听
    observer(value)

    Object.defineProperty(target, key,{
        get(){
            return value;
        },
        set(newValue){
            if (value != newValue) {
                // 设置新值
                // 注意，value一直在闭包中，此处设置完之后，再get时也是会获取最新的值。
                value = newValue
                // 触发更新视图
                updateView()
            }
        }
    })
}



// 监听对象属性
function observer(target) {
    if (typeof target != 'object' || target === null) {
        // 不是对象或者数组
        return target
    }
    if (Array.isArray(target)) {
        // 将数组类型数据 指向 自定义的数组原型 
        target.__proto__ = arrProto
    }
    // 重新定义各个属性
    for (const key in target) {
        defineReactive(target, key, target[key])
    }
}

// 准备数据
const data = {
    name: "张三",
    age: 20,
    info:{
        address:"北京"  //深度监听
    },
    nums:[10,20,30]
}

// 监听数据
observer(data)

// 测试
// data.name = '李四'
// data.age = 22
// data.info.address = "上海" //深度监听

// data.x = '100' //新增属性 监听不到--所以有vue.set
// delete data.name //删除属性，监听不到 --所以有vue.delete


data.nums.push(4) //监听数组