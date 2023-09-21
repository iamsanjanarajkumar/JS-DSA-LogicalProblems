let selTemp = document.getElementById("op");
let temp = document.getElementById("temp");
let output = document.getElementById("result");

function tempHandler(event) {
    event.preventDefault();

    let key = selTemp.value;
    let x =Number(temp.value);

    switch(key){
       case "fahrenheit" : 
        let fah =  x * 1.8 + 32;
        output.innerText = `Temperature after conversion to fahrenheit: ${fah.toFixed(3)} deg Fahrenheit`;
        break;

        case "celsius" : 
        let cel = (x - 32) / 1.8;
        output.innerText = `Temperature after conversion to Celsius: ${cel.toFixed(3)} deg celsius`;
        break;
       
        default : `Invalid Temperature Selection`
        break;
    }
}