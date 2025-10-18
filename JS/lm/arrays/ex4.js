const surveyData = [
    { id: 1, name: "Alice", scores: [12,13,14], status: { active: true, type: 'premium' }, age: 29 },
    { id: 2, name: "Bob", scores: [15,16], status: { active: true, type: 'basic' }, age: 22 },
    { id: 3, name: "Charlie", scores: [17,18,19], status: { active: false, type: 'premium' }, age: 35 },
    { id: 4, name: "David", scores: [20,22], status: { active: true, type: 'premium' }, age: 28 },
    { id: 5, name: "Eve", scores: [23, 24], status: { active: true, type: 'basic' }, age: 41 },
];

let QualifiedCandidates = [...surveyData].filter((e=>e.status.active && e.age<=30))
console.log(QualifiedCandidates)
let AllQualifiedScores = QualifiedCandidates.map(e=>e.scores).flat()
console.log(AllQualifiedScores)
let TotalScoreAggregate = AllQualifiedScores.reduce((a,b)=>{
    return a+b
},0)
console.log(TotalScoreAggregate)