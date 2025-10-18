const monthlySales = {
    jan: 1250,
    feb: 1400,
    mar: 1100,
    q1_bonus: 500, // This is a numeric value that should be included
    apr: 1350,
    may: 1600
};


const arrMonthlySales = Object.entries(monthlySales);
const totalSales = arrMonthlySales.reduce((acc,entry)=>{
    return acc + entry[1];
},0)

console.log(totalSales)