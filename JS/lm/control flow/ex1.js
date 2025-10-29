const commandQueue = [
    "Process Data 1",
    "Process Data 2",
    "Process Data 3",
    "STOP",
    "Skip Data 5", // Should not be processed
    "Skip Data 6"  // Should not be processed
];
let i = 0;
while (i<commandQueue.length){
     if(commandQueue[i]==="STOP") break;
    console.log(commandQueue[i])
    i++
}

const studentList = ["Alice", "Bob", "Charlie", "David", "Eve", "Fiona", "George"];
for (let i = 1; i < studentList.length; i++) {
    console.log(studentList[i])
    i++
}