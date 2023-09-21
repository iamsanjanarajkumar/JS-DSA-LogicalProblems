/*

A
A B
A B C
A B C D
A B C D E

*
* *
* * *
* * * *
* * * * * 

1
1 2
1 2 3
1 2 3 4
1 2 3 4 5

*/

let n = 5;
let str = '';
let str1 = '';
let str2 = '*';


// for lowercase
for(let i=1; i<=n; i++) {
    for(let j=0; j<i;j++) {
        str += String.fromCharCode(j+97); // lowercase a-z
    }
    str += "\n";
}
console.log(str);



// for uppercase
for(let i=1; i<=n; i++) {
    for(let j=0; j<i;j++) {
        str1 += String.fromCharCode(j+65); // uppercase A-Z
    }
    str1 += "<br>";
}
document.getElementById("res1").innerHTML = str1;

//str +='*';
  // str += `${j}`; j =1; j<= i