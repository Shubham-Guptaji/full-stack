const student = {
    name: "Alice",
    age: 22,
    major: "Computer Science",
    GPA: 3.8,
    isEnrolled: true
}

function displayStudentInfo(data){
    if(!data || typeof(data) != "object") {
        console.log("Can't work with empty data")
        return
    }
    for( let key in student ){
        console.log(`Property : ${key}, Value: ${student[key]}`);
    }
}

displayStudentInfo(student);