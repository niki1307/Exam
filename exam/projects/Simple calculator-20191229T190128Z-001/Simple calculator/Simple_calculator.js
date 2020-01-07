let x=document.querySelector("#x");
let y=document.querySelector("#y");
let z=x+y

const addNumbersBtn=document.querySelector("#add_numbers");

addNumbersBtn.addEventListener("click", addNumberFunction);

function addNumberFunction (){    
    const xv = parseFloat(x.value);
    const yv = parseFloat(y.value);
    
    console.log(xv + yv);
    const result= xv + yv;
    
    document.getElementById("result").innerHTML = result;  
}
