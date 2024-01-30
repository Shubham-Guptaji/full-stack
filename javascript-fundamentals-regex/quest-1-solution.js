function outerfn(x){
    let outervar = 2;
    return function(num){
        console.log('outerfunction parameter : ',x,'\noutervar : ', outervar,'\ncalculate outer with inner',(num*outervar))
    }
}

let myfn = outerfn('git');
myfn(2);
