let i=0
let no = Math.floor(Math.random()*100)
console.log(no)
for (let x = 0;x<10;x++){
    var a = prompt('guess the number;')
    if(a == no){
    console.log("you win")
    break
    }
    else if(a>no){
    console.log("guess a smaller number")
    }
    else if(a<no){
    console.log("guess a larger number")
    }
}
console.log('you lose')