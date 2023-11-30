function taxCalculator(){
    const rate = [18,20,10];
    const tax = (income,appliedRate)=>income*appliedRate/100;

    return function(income){
        if(income<=500000){
            return tax(income,rate[0]);
        }else if(income>500000 && income<=1000000){
            return tax(income,rate[1]);
        }else{
            return tax(income,rate[2]);
        }
    }
}

const calculateTax = taxCalculator();
const income1 = 250000;
const income2 = 600000;
const income3 = 800000;
const income4 = 1200000;

for(let income of [income1,income2,income3,income4]){
    console.log(`Tax payable on ${income} is ${calculateTax(income)}`)
}