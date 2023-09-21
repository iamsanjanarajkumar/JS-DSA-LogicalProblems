let principle = document.getElementById("principle");
let time = document.getElementById("time");
let rate = document.getElementById("rate");
let result = document.getElementById("result");

function SubmitHandler(event){
    event.preventDefault();
    x = Number(principle.value);
    y = Number(time.value);
    z = Number(rate.value);
    

    SI = (x * y * z)/100;
    result.innerHTML = `<h3> Simple Interest = ${SI} </h3>`
}