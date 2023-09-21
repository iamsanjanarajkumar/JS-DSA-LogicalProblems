function YearHandler(event){
    event.preventDefault();

    let yr = document.getElementById("year1").value;
    let result = document.getElementById("output");

    if((Number(yr))){
        result.style.display ="block";
        if(yr % 4 == 0 && yr % 100 != 0){
            result.innerText = ` ${yr} Year  is a Leap Year`;
        } else if(yr % 400 == 0){
               result.innerText = ` ${yr} Year is a Leap Year`;
        } else {
            result.innerText = ` ${yr} Year is  not a Leap Year`;
        }
    }
}
/*  if((y%4 ===0) && (y %100 !== 0) || (y %400 == 0)) can also be used*/ 