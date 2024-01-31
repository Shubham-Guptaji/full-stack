function studentManagement() {
    const students = [
        { id: 1, firstName: "John", lastName: "Doe", age: 20, grade: "A"},
        { id: 2, firstName: "Jane", lastName: "Smith", age: 22, grade: "B"},
        { id: 3, firstName: "Bob", lastName: "Johnson", age: 19, grade: "A"}
    ]
    
    const addStudent = (newstudent) => {
        if(!newstudent || !newstudent.firstName || !newstudent.lastName || !newstudent.age || !newstudent.grade) {
            console.log("Student info Invalid");
            return 
        }

        if(newstudent.id){
            if(students.some((element)=> newstudent.id === element.id)){
                console.log("Id already exists.");
                return
            }
            students.push(newstudent);
        }else{
            while(true){
                let id = Math.ceil(Math.random() * 1000000);
                if(students.some((element)=> id === element.id)) continue
                newstudent.id = id;
                students.push(newstudent);
                break;
            }
        }

        console.log("Student added Successfully.")

        return students;
    }

    const updateStudent = (newData) => {
        if(!newData || !newData.id) {
            console.log("Id is mandatory to update information");
            return
        }
        if(!students.some((element)=> newData.id === element.id)) {
            console.log("Id not found");
            return
        }
        students.find((element, index) => {
            if(element.id === newData.id) {
                students[index] = {
                    id: element.id,
                    firstName: newData.firstName || element.firstName,
                    lastName: newData.lastName || element.lastName,
                    age: newData.age || element.age,
                    grade: newData.grade || element.grade
                }
            }
        });

        return students;
    }

    const deleteStudent = (studentInfo) => {
        if(!studentInfo || !studentInfo.id) {
            console.log("Student id is necessary to delete from record.");
            return
        }
        const index = students.findIndex((element)=> element.id === studentInfo.id);
        if(index === -1) {
            console.log("Id not found")
            return
        }
        students.splice(index,1);
        
        return "Student deleted successfully";
    }

    let pass="password@123";

    const getAllStudents = (userpass) => {
        if(!userpass || userpass != pass) {
            console.log("Password didn't match.");
            return
        }
        return students;
    }
    
    const findByGrade = (studentGrade) => {
        if(!studentGrade || !['A', 'B', 'C', 'D','F'].includes(studentGrade)) {
            console.log("Invalid Grade");
            return 
        }
        const data = students.filter(element => element.grade === studentGrade );

        return data;
    }

    const avgAge = (userpass) => {
        if(!userpass || userpass !== pass) {
            console.log("Password didn't match.")
            return
        }
        const data = students.reduce((a,b)=> a + b.age, 0)
        return data/students.length;
    }

    return { addStudent, updateStudent, deleteStudent, getAllStudents, findByGrade, avgAge}
}

const record = studentManagement();

const addedStudent = record.addStudent({firstName: "Ryan", lastName: "Gaekwad", age: 22, grade: "B"});
console.log('Added Student',addedStudent);

const updatedStudent = record.updateStudent({id: 3, firstName: "Joel", lastName: "Christian", age: 27, grade: "A"})
console.log('Updated Student',updatedStudent);

const deletedStudent = record.deleteStudent({id: 2});
console.log(deletedStudent);

const AllStudents = record.getAllStudents("password@123");
console.log("All Students : ",AllStudents);

const GradeStudent = record.findByGrade("B");
console.log(`All Students With given same grade are : `, GradeStudent);

const AverageAge = record.avgAge("password@123");
console.log('Average age of all students in record is ', AverageAge);