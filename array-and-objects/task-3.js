const student = { name: "Shyam", expertise: "Backend" };

Object.preventExtensions(student);
const extensibleStatus = Object.isExtensible(student);

const teacher = { subject: 'Math' };

Object.seal(teacher);
const sealedStatus = Object.isSealed(teacher);

console.log("The Extensible Status is :", extensibleStatus);
console.log("The Sealed Status is :", sealedStatus);
