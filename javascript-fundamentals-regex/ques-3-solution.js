const matchfn = (mystring, mycase) => {
    const patterns = {
        digit: /[0-9]/g,
        uppercase: /[A-Z]/g,
        lowercase: /[a-z]/g,
        specialCharacter: /[`!@#$%^&*(),.?":{}_+;|<>]/g
    }

    if (!patterns.hasOwnProperty(mycase)) return 'Case Not Found';
    return mystring.match(patterns[mycase]);
}

const mystring1 = "Programming123 is Fun!";
const mystring2 = "Let's explore JavaScript!";
const mystring3 = "12345 Special Characters: @#$%^&*";
const mystring4 = "Lowercase and UPPERCASE Mix";
const mystring5 = "Testing for Special Characters: {}[]()";

const myoutput1 = matchfn(mystring1, 'digit');
const myoutput2 = matchfn(mystring2, 'uppercase');
const myoutput3 = matchfn(mystring3, 'specialCharacter');
const myoutput4 = matchfn(mystring4, 'lowercase');

console.log(myoutput1);
console.log(myoutput2);
console.log(myoutput3);
console.log(myoutput4);
