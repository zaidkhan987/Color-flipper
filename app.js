const colorChange = () => {
const randomNumber = Math.floor(Math.random()*16777215)
const randomcode = "#" +randomNumber.toString(16)
document.body.style.backgroundColor = randomcode
document.getElementById('color-change').innerText = randomcode
} 


document.getElementById('btn').addEventListener(
    'click',
    colorChange
)

colorChange()











// let a= 2;
// let b= 1;

// a=3
// document.write(a)

// let c = --a
// document.write(c)

// // let sum = --a - --b
// // document.write(sum)


// document.write(a)











// let userInput = prompt('enter a number')

// let c = `${userInput} x 1 = ${userInput * 1}<br>
//          ${userInput} x 2 = ${userInput * 2}<br>
//          ${userInput} x 1 = ${userInput * 3}<br>
//          ${userInput} x 2 = ${userInput * 4}<br>
//          ${userInput} x 1 = ${userInput * 1}<br>
//          ${userInput} x 2 = ${userInput * 2}<br>
//          ${userInput} x 1 = ${userInput * 1}<br>
//          ${userInput} x 2 = ${userInput * 2}<br>
// ` 

// document.write(c)




// let userInput = prompt('enter subject 1')
// let userInput2 = prompt('enter 2')
// let userInput3 = prompt('enter 3')


// let a = userInput;

// let b = userInput2;

// let c = userInput3;


// let totalMarks = 200;

// let userInputMarks1 = prompt('enter marks 1')
// let userInputMarks2 = prompt('enter marks 2')
// let userInputMarks3 = prompt('enter marks 3')


// let = studentResult1 = `${userInputMarks1 / totalMarks * 100}% ` 

// document.write(`${userInput} ${totalMarks}     ${userInputMarks1} ${studentResult1}`)



