let startNum = document.getElementById('start');
let endNum = document.getElementById('end');
let result = document.getElementById('result');

const submitHandler =  async(event) => {
    event.preventDefault();
    let x = Number(startNum.value);
    let y = Number(endNum.value);
    let res1 =range(x,y);
    result.innerHTML = `<h1> Result  =  ${res1}</h1>`
}


function range(start,end) {
    if(end - start === 2) { // 1,3 =2
        return [start+1];
    } else{

        let list = range(start,end -1);
        list.push(end - 1);
        console.log('list', list);
        return list;
    }
}