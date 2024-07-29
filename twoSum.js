function twoSum(nums, target) {
  // Create a hash map to store numbers and their indices
  const map = new Map();

  // Iterate through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement
    const complement = target - nums[i];

    // Check if the complement is in the map
    if (map.has(complement)) {
      // Return the indices of the two numbers
      return [map.get(complement), i];
    }

    // Add the current number and its index to the map
    map.set(nums[i], i);
  }

  // Return an empty array if no solution is found
  return [];
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
console.log(twoSum([3, 3], 6)); // Output: [0, 1]
