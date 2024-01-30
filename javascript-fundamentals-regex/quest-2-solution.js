function regexfn(reg, string){
    return reg.test(string);
}

let result1 = regexfn(/ab/,"dabc");
let result2 = regexfn(/[A-Z]/,'adbsd')
let result3 = regexfn(/^[A-Z]/,"theGit");
let result4 = regexfn(/^[A-Z]+$/i,"theGit");
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);