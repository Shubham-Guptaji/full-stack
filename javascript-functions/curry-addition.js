function curry (operand1){
    return function (operand2){
        return function (operand3){
            return ()=>{
                return operand1+operand2+operand3;
            }
        }
    }
}

const curryAdd = curry(5)(8)(6);
console.log(`The curry Addition is : ${curryAdd()}`);