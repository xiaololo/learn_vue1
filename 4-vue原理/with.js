const obj ={a:100,b:200}
console.log(obj.a) //100
console.log(obj.b) //200
console.log(obj.c) //undefined

with(obj){
    console.log(a) //100
    console.log(b) //200
    console.log(c) //报错 c is not defined
}
// 使用with后，能改变{}内自由变量的查找方式
// 将{} 内自由变量，当做obj的属性来查找