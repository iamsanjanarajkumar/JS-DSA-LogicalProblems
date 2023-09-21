let nums = document.getElementById("nums");
let result = document.getElementById("result");
let output = document.getElementById("output2");

function submitHandler(event){
    event.preventDefault();
    console.log('nums',nums.value);
 //string to array 
    let splitArr = nums.value.split(",");
    console.log('splitArr',splitArr);

   //array of strings to number array conversion
    let numAr = splitArr.map((item) => {
        return Number(item);
    });
    console.log('numAr',numAr);

    // let large = Math.max(...numAr);
    // let small = Math.min(...numAr);
    // let evenNum =(even(numAr));
    let large = largest(numAr); 
    if(large %2 == 0){
        output.innerHTML = `<h1> Its Largest Even!</h1>`
    } else{
        output.innerHTML = `<h1> Its Odd </h1>`
    }
    // let small = smallest(numAr);
   
    // let l = 0;
    // for(let i = 0; i < numAr.length; i++){
    // if(i> l){
    //     l = numAr[i];
    // }
    // }

    result.innerHTML =`<h1> Largest =${large} Smallest  = ${small} </h1>`
   
}

// using looping method
function largest(numbers){
    let x =numbers[0];
    for(let i = 1 ; i< numbers.length; i++){
        if(numbers[i]> x){
         x  = numbers[i];
        }
        return x;
}
}

// function smallest(numbers){
//     let y =numbers[0];
//     for(let i = 1 ; i< numbers.length; i++){
//         if(numbers[i]< y){
//          y  = numbers[i];
//         }
//         return y;
// }
// }
// function even(numbers){
//     for(let i = 0 ; i< numbers.length; i++){
//         if( numbers[i] % 2 == 0){
//             console.log("its even");
//           let x = numbers[0];
//           for(let j = 1 ; j< numbers.length; j++){
//                     if(numbers[j] > x){
//                      x  = numbers[j];
//                     }
//                     return x;
                  
//         } 
//       }    else{
//             console.log("its odd");
//         }

// }
// }