const salesRecords = [
    { id: 101, item: 'Laptop', amount: 850 },
    { id: 102, item: 'Mouse', amount: 45 },
    { id: 103, item: 'Monitor', amount: 500 },
    { id: 104, item: 'Keyboard', amount: 99 },
    { id: 105, item: 'Webcam', amount: 350 },
    { id: 106, item: 'SSD', amount: 620 },
];

const HighSales = salesRecords.filter((v)=>{
    if (v.amount>=500) {
        return true
    }
    return false
})
console.log(HighSales)
const summaryMessages = HighSales.map((v)=>{
    return `Record ${v.id} sold $${v.amount}`
})
console.log(summaryMessages)