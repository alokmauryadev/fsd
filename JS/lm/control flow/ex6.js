const studentData = [
  {
    name: "Alice",
    grades: [85, 92, 70], // 3 passing
  },
  {
    name: "Bob",
    grades: [68, 74, "incomplete", 59], // 1 passing, 2 failing, 1 incomplete
  },
  {
    name: "Charlie",
    grades: [95, "incomplete", 88, "incomplete"], // This student should be skipped entirely
  },
  {
    name: "Diana",
    grades: [100, 98], // 2 passing
  }
];
function analyzeStudentGrades(grades){
      const results = {
    passingGrades: 0,
    failingGrades: 0,
    incompleteAssignments: 0,
  };

    studentLoop: for (const student of studentData){
        let studentIncompleteCount = 0;
        for (const grades of student.grades) {
            if(grades==="incomplete"){
                studentIncompleteCount++;
            }}

            if(studentIncompleteCount>=2){
             console.log(`Skipping student ${student.name} due to too many incomplete assignments.`);
             continue studentLoop;
            }

            for (const grades of student.grades) {
                            if(grades==="incomplete"){
            results.incompleteAssignments++
        }
         else if(grades<70){
            results.failingGrades++
        }
        else{
            results.passingGrades++
        }

            }
        }
            return results;
    }
const analysis = analyzeStudentGrades(studentData);
console.log("Analysis", analysis);
