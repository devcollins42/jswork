const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;
mySubmit.onclick = function(){
    
    age = myText.value;
    age = Number(age)

    if (age >= 100){
        resultElement.textContent =`You're too Old to enter this site`
    }
    else if(age == 0){
        resultElement.textContent =`You can't enter. c'mon, you were just born.`
    }
    else if (age >= 18){
        resultElement.textContent = `you are old enough to enter this site`
    }
    else if(age<0){
        resultElement.textContent = `Your age can't be below 0`
    }
    else{
        resultElement.textContent = `Your age must be 18+ to eneter this site`
    }
}
