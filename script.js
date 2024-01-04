// Vowel Checker
let input = document.querySelector(".input")
let vouleCheck = document.querySelector(".btn")
let printvalue = document.querySelector(".printvalue")
let total = document.querySelector(".count")
let form_details = document.querySelector(".form_back .form_details")
console.log(form_details);
let voule = ['a','e','i','o','u','A','E','I','O','U']

vouleCheck.addEventListener("click", function(){
        let count = 0
       if(input.value == ''){
        console.log("empty");
           form_details.innerHTML = 'Write a sentence to check vowel'        
       }else{
        let check = input.value.split('')
        check.forEach(function(value){
              if(voule.includes(value)){
                count++
                  let indexnumber = check.indexOf(value)
                  check.splice(indexnumber,1,`<span style="color:red;">${value}</span>`)
                  printvalue.innerHTML = check.join('')
                  total.innerHTML = `Total Vowel Words : ${count}`
                }
        })
       }
})
// Leap Year Calculator
let leapValue = document.querySelector(".leapYear")
let leapCheck = document.querySelector(".leapCheck")
let leapPrint = document.querySelector(".leapPrint")


leapCheck.addEventListener("click", function(){
    let year = leapValue.value
   if(year){
    if(year % 4 === 0 || year % 400 === 0 && year % 100 !== 0){
        leapPrint.innerHTML = `${year} is leap year`
    }else{
        leapPrint.innerHTML = `${year} is not leap year`
    }
   }
})
