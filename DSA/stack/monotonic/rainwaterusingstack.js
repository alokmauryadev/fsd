let height = [0,1,0,2,1,0,1,3,2,1,2,1]
function trapStack(height) {
    let totalWater = 0;
    const stack = []; 

    for (let current = 0; current < height.length; current++) {
                while (stack.length > 0 && height[current] > height[stack[stack.length - 1]]) {
                        const bottomIndex = stack.pop();
                        if (stack.length === 0) break;
                        const leftIndex = stack[stack.length - 1];
            const rightIndex = current;
            const width = rightIndex - leftIndex - 1;
            const boundedHeight = Math.min(height[leftIndex], height[rightIndex]) - height[bottomIndex];
            totalWater += width * boundedHeight;
        }
        stack.push(current);
    }
    return totalWater;
}
console.log(trapStack(height))