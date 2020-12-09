const data={}
var name='zhangsan'
Object.defineProperty(data,"name",{
    get:function(){
        console.log('get')
        return name
    },
    set:function(newVal){
        console.log('set')
        name = newVal
    }
})

console.log(data.name)
data.name="lisi"
console.log(data.name)
// get zhangsan
// set
// get lisi