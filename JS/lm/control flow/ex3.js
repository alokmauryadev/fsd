const transactions = [25.50, 10.00, -5.25, 100.00, "ERROR", 50.00, -12.00];
let total = 0;

for (const data of transactions) {

if(data<0){

continue
}
else if((typeof data)!=="number"){break}

total += data;

}
console.log(total)