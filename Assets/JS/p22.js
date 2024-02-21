let x = document.getElementById('num');
let out = document.getElementById('out');

function submitHandler(event){
    event.preventDefault();

    let num = Number(x.value);
    let len = Number(x.value.length);

    let sum =0 ;
    let temp= num;

    while(temp>0){
        let rem = temp%10;
        sum += rem ** len;

        temp = parseInt(temp/10);

    }
    if(sum ===num){
        console.log(`${num} is an Armstrong Number`);
        out.innerHTML = `<h1> ${num} is an Armstrong Number</h1>`
    } else{
        console.log(`${num} is not an Armstrong Number`);
        out.innerHTML = `<h1> ${num} is not an Armstrong Number</h1>`
    }
}