let inpArray = [ 1,-2,4,0,-12,20,16];

console.log('inpArray', inpArray);

let asc = document.getElementById('asc');
let desc = document.getElementById('desc');

function ascOrder(arr){
    for(let  i=0; i<arr.length; i++){
        
        for(let j= 0 ; j<arr.length; j++){
            if(arr[j] >arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function descOrder(arr) {
    for(let  i=0; i<arr.length; i++){  
        for(let j= 0 ; j<arr.length; j++){
            if(arr[j] < arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
let res = ascOrder(inpArray);
console.log('ascOrder= ',res);
asc.innerHTML = `<h1>Asc = ${res} </h1>`

let output = descOrder(inpArray);
console.log('desc order =',output);
desc.innerHTML = `<h1> Desc = ${output}</h1>`