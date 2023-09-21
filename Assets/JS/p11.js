let stringIn = document.getElementById('str1');
let fStatus = document.getElementById('status');
let result  = document.getElementById('result');

// function submitHandler(){
 
//     let user = stringIn.value;
//     let strMatch = /^[a-zA-Z]+$/;
//     if(user.match(strMatch)){
//         result.innerText = `Its a STRING CHARACTER!`;
//     } else{
//         result.innerText = `Its Not a STRING CHARACTER!`;
//     }


// }
function submitHandler(){
  let str = /^[a-zA-Z]+$/;
  if(str.test(stringIn.value)){
      fStatus.innerText = `Valid Input `;
      fStatus.classList.add("success");
      hideStatus("success");
  } else {
    fStatus.innerText = `Invalid Input `;
    fStatus.classList.add("invalid");
    hideStatus("invalid");
  }
}

function hideStatus(clsName){
    setTimeout(() =>{
        fStatus.innerText ='';
        fStatus.classList.remove(clsName);
    },3000);
}