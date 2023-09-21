let op = document.getElementById("op");
let output = document.getElementById("output");

function selHandler(){
    let val= op.value;
    console.log('val',val);
    switch(val){
        case "square": 
        let x = prompt("Enter sides of a square:");
        let area = areaSquare(Number(x));
        output.innerText = `Area of a square: ${area} units`;
        break;

        case "circle": 
        let r = prompt("Enter radius of a circle:");
        output.innerText = `Area of a circle: ${areaCircle(Number(r))} units`;
        break;

        case "rect":
        let l = prompt("Enter length of a rectangle:");
        let b = prompt("Enter breadth of a rectangle:");
        
        output.innerText = `Area of a rectangle : ${areaRect(l,b)} units`;
        break;

        case "tri":
        let ba = prompt("Enter  base of a triangle:");
        let h = prompt("Enter height of a triangle:");
        output.innerText = `Area of a Triangle : ${areaTri(ba,h)} units`;
        break;

        case "trapezium":
        let  b1 = prompt("Enter base 1 of a Trapezium: ");
        let b2 = prompt("Enter base 2 of a Trapezium:");
         let he = prompt("Enter height of a Trapezium:");
            output.innerText = `Area of the Trapezium :${areaTrapezium (b1,b2,he)} units`;
            break;

        case "parallelogram":
        let base =Number( prompt("enter base of parallelogram :"));
        let height = Number( prompt("enter height of parallelogram :"));
        output.innerText =`Area of parallelogram :${areaParallel(base, height)} units`;
        break;
        

        default:
        output.innerText = ` Choose proper selection`
        break;
    }
}


function areaSquare(a){
  return a*a;
}
function areaCircle(r){
    let pi= Math.PI;
    return pi * r * r;
}
function areaRect(l ,b){
    return  (Number( l))*(Number( b));

}
function areaTri(ba,h){
    return  0.5 *(Number(ba)) * (Number(h));
}

function areaTrapezium(b1,b2,he){
    return 0.5 * ((Number(b1)) + (Number(b2))) * (Number(he));
}
function areaParallel(base,height){
   return base *height;
}