const studentName = document.getElementById("studentName")
const marks = document.getElementById("marks")
const subject = document.getElementById("subject")
const addButton = document.getElementById("addStudent")

const studentDetails = document.querySelector(".studentDetails")
const studentData = document.querySelectorAll(".studentData")

class Students{
    students = [];
    addStudent(name,marks,subject){
        let status;
        let id = Date.now()
        if(marks>40){
            status = "Pass"
        }
        else{
            status = "Fail"
        }
        this.students.push({id,name,subject,marks,status})
        this.renderStudent();
    }
    deleteStudent(id){
        console.log("function called")
        this.students = this.students.filter(e=>e.id!=id)
        this.renderStudent()
    }
    remove(index){
        // console.log("remove function called")
        this.students.splice(index,1)
        this.renderStudent();
    }
    renderStudent(){
        studentDetails.innerHTML = `
                    <div class="headers">
                <h4>Name</h4>
                <h4>Course</h4>
                <h4>Marks</h4>
                <h4>Status</h4>
                <h4>Action</h4>
            </div>`
        this.students.forEach((e,index)=>{
            let studentData = document.createElement("div")
            studentData.className = "studentData"
            studentData.innerHTML = `                <span class="name">${e.name}</span>
                    <span class="course">${e.subject}</span>
                    <span class="marks">${e.marks}</span>
                    <span class="status ${e.status=="Pass"?"pass":"fail"}">${e.status}</span>
                    <span class="action" data-id="${e.id}" onclick="deleteStudent(${index})">Delete</span>`
            studentDetails.append(studentData)
        })
    }
}
const manager = new Students()
addButton.addEventListener("click",()=>{
    if(studentName.value && marks.value && subject.value){
        manager.addStudent(studentName.value,marks.value,subject.value)
        console.log(manager.students)
    }

})
// Attach the listener to the PARENT container (studentDetails)

function deleteStudent(index){
    manager.remove(index)
}
// studentDetails.addEventListener("click", (event) => {
    
//     // Check if the clicked element has the class "action"
//     if (event.target.classList.contains("action")) {

//     const id = event.target.dataset.id;
//     console.log(id)
//     manager.deleteStudent(id)
//         // Now you can call your delete function
//         // manager.deleteStudent(id);
//     }
// });