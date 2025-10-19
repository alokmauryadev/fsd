function squareSum(numbers){
  const sqrsum = numbers.reduce((s,v)=>{
    return s + (v**2)
  },0)
  return sqrsum
}
const number = [1,4,5,6]
console.log(squareSum(number))