let fnumber = document.getElementById('num');
let fMethod = document.getElementById('method');
let output = document.getElementById('result');

function submitHandler(event) {
    event.preventDefault();
    let number = Number(fnumber.value);

    switch(fMethod.value) {
        case "op":
           if (number >= 0) {
            if (number == 0) {
              output.innerHTML =`<h3>The Number is ZERO!</h3>`;
            } else {
                output.innerHTML = `<h3> The Number ${number} is POSITIVE </h3>`;
             } 
            }else{
                output.innerHTML = `<h3>The Number ${number} is NEGATIVE </h3>`;
            }
            break;

      case "con":
         let x = Math.sign(number);
           if (x >= 0) {
                if( x == 0){
                    output.innerHTML =`<h3>The Number is ZERO!</h3>`;
                }else {
             
                  output.innerHTML = `<h3> The Number ${number} is POSITIVE </h3>`;
                }
              }else{
                  output.innerHTML = `<h3>The Number ${number} is NEGATIVE </h3>`;
              }
              break;

              default: output.innerHTML = `<h1> Choose the proper Method</h1>`
              break;
            }
            
}