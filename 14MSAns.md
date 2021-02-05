



### 判断数组方法，
https://segmentfault.com/a/1190000017790888?utm_source=tag-newest
https://blog.csdn.net/weixin_34279061/article/details/88674722

### 数组随机打乱 
https://blog.csdn.net/m0_38082783/article/details/79579116

### 原型题目深入分析
https://www.cnblogs.com/momo798/p/5903921.html


### bind call apply 区别
https://blog.csdn.net/u010176097/article/details/80348447



### 循环随机位交换法（最容易理解的打乱数组顺序的方法）
原理：循环遍历该数组，在每次遍历中产生一个(0 ~ length - 1)之间的随机下标的数，该数代表本次循环要随机交换的位置。将本次循环当前位置的数和随机位置的数进行交换。
    let arr = [1, 2, 3, 4, 5];
    function randFun(arr) {
        for(let i=0, len = arr.length; i < len; i++) {
            let index = parseInt(Math.random() * (len - 1));
            let tempValue = arr[i];
            arr[i] = arr[index];
            arr[index] = tempValue;
        }
        return arr;
    }
    let newArr = randFun(arr);



###  bind call apply 区别


## vue与react的区别
http://caibaojian.com/vue-vs-react.html
1.数据是不是可变的
react 整体是函数式的思想，把组件设计成纯组件，状态和逻辑通过参数传入，所以在react中，是单向数据流，推崇结合immutable来实现数据不可变。
vue的思想是响应式的，也就是基于是数据可变的，通过对每一个属性建立Watcher来监听，当属性变化的时候，响应式的更新对应的虚拟dom。

react是类式的写法，api很少，
vue是声明式的写法，通过传入各种options，api和参数都很多。

模板  html jsx
数据处理：Vue 是响应式的，React 是手动setState。


bind call apply  先bind(a) 再call(b) 结果, 深度总结
事件轮询
事件捕获，冒泡
vue与react的区别

原型题目深入分析：
判断数组方法，整理
数组随机打乱 
bind call apply 区别
性能优化 *****



--------系统学习------------
## JS
原型类：
数组类：
bind call apply
ES6
性能优化

## css
rem原理，详析


## vue 
keep-alive原理 
nexttick原理
watch computed原理


了解react、TS、Node、SSR 服务端渲染缓存、组件封装等



## 个人亮点：
对技术归纳总结 整理输出的习惯：
对新技术进行归纳总结，系统产出归纳性的技术博客和学习代码产出到git中；
对于常用的的技术，原理进行探索，并进行归纳总结产出技术博客和git中；

## 难点：
null的问题
计算精度的问题
重复提价问题：
金科财税、考勤时长、门控安防app 购物车问题