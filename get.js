let customerName = prompt('Enter your full name')
let customerAddress = prompt`${customerName},Enter his house address`
let customerAge = prompt`${customerName}, How old are you? :`
let istTimeDriver = prompt`${customerName}, is it your first time driving?: `
if(customerAge<18){
    console.log('sorry not qualified to drive, Engine stops')
}
else{
console.log(`congratulation,${customerName}, you can drive`)
}
