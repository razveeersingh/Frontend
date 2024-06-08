// let x=0
// let a=[10,20,30,50,"rajveer",90.5,x]

// for (let i=0;i<a.length;i++){
//     console.log(a[i])
// }

// for (let i of a){
//     console.log(i)
// }

// for(let i in a){
//     console.log(a[i])
// }

// let sum=[500,30,545,89,96,36,45]

// sum of array
// maz element in the array

// let a=0
// for(let i of sum){
//     a=a+i
// }
// console.log(a)

// a.pop()
// a.push(80)
// a.shift()
// a.unshift(90)
// console.log(a)

// console.log(a.slice(-9,-2))
// a.splice(1,2,"rajveer","singh")
// console.log(a)

// a.splice(0,4,)
// console.log(a)

// let b = a.map((item)=>{
//     return item+"ok"
// })
// console.log(b)
    
// b = a.filter((item)=>{
//     return item<=50 || item==70
// })
// console.log(b)
        
// b = a.map((item)=>{
//     return item<=50 || item==70
// })
// console.log(b)
let a = [10,20,30,40,60,50,33]
            
let b = a.reduce((x,y)=>{
    return y>x
})
console.log(b)