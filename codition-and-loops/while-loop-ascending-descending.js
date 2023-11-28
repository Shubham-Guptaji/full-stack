let num1 = 1;
let num2 = 25;

let inc=num1;
while(num1){
    if(inc<=num2){
        console.log(inc);
        inc++;
        num1++;
    }else if(num1>1){
        num1--;
        console.log(num1);
    }
}