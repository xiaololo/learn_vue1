const compiler = require('vue-template-compiler')

//插值 
const template=`<p>{{message}}</p>`
with(this){return _c('p',[_v(_s(message))])}
with(this){return createElement('p',[createTextVNode(toString(message))])}
this => const vm = new Vue({...})
createElement => vnode

// 表达式
const template = `<p>{{flag ? message:'no message found'}}</p>`
with(this){return _c('p',[_v(_s(flag ? message:'no message found'))])}
with(this){return createElement('p',[createTextVNode(toString(flag ? message:'no message found'))])}

// 属性和动态属性
const template = 
    `
    <div id="div1" class="container">   
		<img :src="imgUrl"/>
    </div>
    `
with(this) {
    return _c('div', 
    {staticClass: "container",attrs: {"id": "div1"}},
    [_c('img', { attrs: { "src": imgUrl}})]
    )}

// 条件
const template =
    `
    <div>
		<p v-if="flag === 'a'">A</p>
		<p v-else>B</p>
	</div>
`
with(this) {
    return _c('div', [
        (flag === 'a') ? 
        _c('p', [_v("A")]) :
         _c('p', [_v("B")]
    )])}

// 循环
const template =
 `
    <ul>
		<li v-for="item in list" :key="item.id">{{item.title}}</li>
	</ul>
`
with(this) {
    return _c('ul', _l((list), function (item) {
        return _c('li', {
            key: item.id
        }, [_v(_s(item.title))])
    }), 0)
}

// 事件
const template =`
<button @click="clickHandler">submit</button>
`
with(this) {
    return _c('button', {on: {"click": clickHandler}}, [_v("submit")])
}

// v-model
const template = `<input type="text" v-model="name">`
with(this) {
    return _c('input', {
        directives: [{
            name: "model",
            rawName: "v-model",
            value: (name),
            expression: "name"
        }],
        attrs: {
            "type": "text"
        } ,
        domProps: {
            "value": (name) //value = this.name
        },
        on: {
            "input": function ($event) {
                if ($event.target.composing) return;
                name = $event.target.value //当前文本款数据绑定在name上
            }
        }
    })
}


//编译
const res = compiler.compile(template)
console.log(res.render)


// 从vue源码中找到缩写函数的含义
function installRenderHelpers(target) {
    target._o = markOnce
    target._n = toNumber // 数字
    target._s = toString // 字符串
    target._l = renderList // 列表
    target._t = renderSlot
    target._q = looseEqual
    target._i = looseIndexOf
    target._m = renderStatic
    target._f = resolveFilter
    target._k = checkKeyCodes
    target._b = bindObjectProps
    target._v = createTextVNode
    target._e = createEmptyVNode
    target._u = resolveScopedSlots
    target._g = bindObjectListeners
}