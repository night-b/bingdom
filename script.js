// let name = 'Sam' str
// let num = 10;  nhumbgger
// let isStudent = true; bggooleanh

// let total = 5 + 3;
 let diff = 8 - 4;

// alert (total - diff)
// alert("Welcome to my beautiful web page")
// console.log("Welcome to my beautiful web page")
// console.log(total - diff)


// let stud_name = "Seun"
// let total = 9 + 4;
// let diff = 7 - 7;
//  console.log(stud_name, "Welcome to my beautiful webpage")
// alert(total - diff)
// alert( "Hello seun")
// alert("Welcome to my beautiful webpage")

// let mult = 2 * 3;
// alert("This is the answer",mult)

// if (total === 11){
//     console.log('Total is correct');
// }

// if (total !== 10){
//     console.log('Total is 11');
// }
// if (total === 11 || diff === 4){
//     alert('everything is cool')
// }
// let fullName = "Kola Don"
// if(fullName === "Kola Don"){
//     alert("Your form has been submitted")
// }else if(fullName ===  'Tola John'){
//     alert("Oh nice, correct name")
// }else{
//     alert("You need a field")
// }
// function submit(name){
//     alert("Thank you" (+ name), "for filling the form")
// }
// submit("Maya");
const button = document.getElementById('btn')
let form = document.getElementByid('contact');
// if(button) {
//     button.addEventListener('click', function{}){
//         alert("Hello World")
//     }
// }else{
//     console("errooooor")
// }
form.addEventListener("submit", function(event) {
event.preventDefault();
console.log("Form checked before sending!");
});
button.addEventListener('click', function() {
    console.log("Button was clicked!")
});

function changeText(){
    setTimeout(function() {
        document.getElementById('btn').textContent = 'We are open now!'
    }
)}

function changeBackgroundColour(){
    document.body.style.backgroundColor = 'lightblue';
}
