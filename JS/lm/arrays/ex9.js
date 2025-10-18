function sumOfN(n) {
  return (n*(n+1))/2;
}

function printMultiplicationTable(n) {
    let table=[];
    for(let i=1;i<=10;i++){
       table.push(`${n} * ${i} = ${n*i}`);
    }
    return table;
}

function countVowels(str) {
    let strn = str.toLowerCase();
    let count = 0;
  for(const alb of strn){     
      let vowels = ["a","e","i","o","u"]
      if(vowels.includes(alb)){
        count++
    }
  }
  return count
}

console.log(sumOfN(10))
console.log(printMultiplicationTable(2));

console.log(countVowels("Alok"))