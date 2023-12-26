const findIndicesForSum = (targetNumber, numbers) => {

    // Initialize two pointers
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;

    // Iterate until the two pointers meet
    while (leftPointer < rightPointer) {
        
        // Calculate the sum of the values at the current pointers
        const currentSum = numbers[leftPointer] + numbers[rightPointer];

        
        if (currentSum === targetNumber) {
            // Return the indices 
            return [leftPointer + 1, rightPointer + 1];
        } else if (currentSum < targetNumber) {
            // If the current sum is less than the target, move the left pointer to the right
            leftPointer++;
        } else {
            // If the current sum is greater than the target, move the right pointer to the left
            rightPointer--;
        }
    }

    return "No such indices found.";
}

//checking values [first case, it returns no such indices found, second case it returns the indices]

// const targetNumber = 9;
// const numbers = [2, 4, 6, 8, 10, 12];
// const result = findIndicesForSum(targetNumber, numbers);

const targetNumber = 10;
const numbers = [2, 4, 6, 8, 11, 15];
const result = findIndicesForSum(targetNumber, numbers);

console.log(result);

