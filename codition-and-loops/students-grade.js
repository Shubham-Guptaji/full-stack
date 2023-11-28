let Grade;
const marks = 85;
if(marks>90){
    Grade = "A";
}else if(marks>70 && marks <=90){
    Grade = "B";
}else if(marks>50 && marks <=70){
    Grade = "C";
}else{
    Grade = "F";
}
console.log(Grade);