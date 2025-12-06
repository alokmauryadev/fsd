let level = [0,1,0,2,1,0,1,3,2,1,2,1]
let leftMax = []
let rightMax = []
leftMax[0] = level[0]
for (let i = 1; i < level.length; i++) {
    leftMax[i] = Math.max(level[i],leftMax[i-1])
}
console.log(level.length)
rightMax[level.length-1] = level[level.length-1]
console.log(rightMax)
for (let i = level.length-2; i>=0; i--) {
    rightMax[i] = Math.max(level[i],rightMax[i+1])
}
let water = 0
for (let i = 0; i < level.length; i++) {
    water += Math.min(leftMax[i],rightMax[i]) - level[i]
}
console.log(water)

console.log(leftMax)
console.log(rightMax)
