let student = [];
function showMessage(){
        alert ("welcome to studyhub dashbord!");
    }

let students = [];

function addStudent() {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;

    let student = {
        name: name,
        age: age,
        course: course
    };

    students.push(student);

    displayStudents();

    clearForm();
}


function displayStudents() {

    let container = document.getElementById("studentContainer");

    container.innerHTML = "";

    for(let i = 0; i < students.length; i++) {

        container.innerHTML += `
        <div>
            <h3>${students[i].name}</h3>
            <p>Age: ${students[i].age}</p>
            <p>Course: ${students[i].course}</p>

            <button onclick="deleteStudent(${i})">
            Delete
            </button>

        </div>
        `;
    }

    document.getElementById("totalStudents").innerHTML =
    "Total Students: " + students.length;
}


function clearForm(){

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("course").value = "";

}


function deleteStudent(index){

    students.splice(index,1);

    displayStudents();

}
