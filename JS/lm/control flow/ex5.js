const grades1 = [85, 92, 68, 74, "incomplete", 95, 59];
// Expected output: { passingGrades: 4, failingGrades: 2, incompleteAssignments: 1 }

const grades2 = [71, 65, "incomplete", 88, "incomplete", "incomplete", 99];

function analyzeStudentGrades(grades){
      const results = {
    passingGrades: 0,
    failingGrades: 0,
    incompleteAssignments: 0,
  };

    for (const grade of grades){
          if(grade==="incomplete"){
            results.incompleteAssignments++
            if(results.incompleteAssignments>2){
             return "Analysis halted: Too many incomplete assignments";
        }
        }
        else if(grade<70){
            results.failingGrades++
        }
        else{
            results.passingGrades++
        }
    }
    return results;
}
const analysis = analyzeStudentGrades(grades1);
console.log("Analysis", analysis);
console.log(`Analysis: ${JSON.stringify(analysis)}`);