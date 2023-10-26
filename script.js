// console.log("heheh");
// document.write("heheheheheh");
// console.warn("this warn");
// console.error("this is error");
var num1=45;
var num2=45;
console.log(num1 +num2);
console.log("eehe");
console.log('ddd');

// DOM(Document Object model) manupilation in JavaScript
let exam = document.getElementById('rep');
console.log(exam);
exam.style.background= "red";
let bt=document.getElementById('onclick');
document.getElementById('rep').innertext="hi"

tn=document.getElementsByTagName('div');
// console.log(tn);
 created_element=document.createElement('p');

created_element.innerText="THIS IS CREATED USING JAVASCRIPT";

tn[0].appendChild(created_element);

created_element2=document.createElement('h1');
created_element2.innerText="adaign by java";
tn[0].replaceChild(created_element2,created_element);

function clicked(){
          document.getElementById('rep').innerText=("u have clicked the button");          
}
