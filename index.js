
// user enters age 
// take age and return it 
// comment on age

let userInput = document.getElementById("userInput")
let userSubmit = document.getElementById("userSubmit")
let result = document.getElementById("result")


userSubmit.onclick = function(){

    let age = userInput.value;
    console.log(age)

    if(age <= 0 ){
        result.innerHTML = `Just not possible is it?`
    }
    else if (age >= 100){
        result.innerHTML = `You are ${age}, that is very very old?`
    }
    else if (age >= 50){
        result.innerHTML = `You are ${age}, that is quite old? You can still buy alcohol though.`
    }
    else if(age >= 18){
        result.innerHTML = `Your age is ${age}, you can buy alcohol in the UK!`

    }
    else if (0 > age > 1){
        result.innerHTML = `You are a mere months old!`
    }
    else if (age < 18){
        result.innerHTML = `You are ${age}, not legal buddy.`
    }
    


}