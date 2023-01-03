/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
 // Create a map of Roman numeral values
  const romanNumerals = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  };
    
  let result = 0;
  let prevValue = 0;
  // Iterate through the characters in reverse order
  for (let i = s.length - 1; i >= 0; i--) {
    // Get the integer value of the current character
    const value = romanNumerals[s[i]];
    // If the value is greater than or equal to the previous value, it should be added
    if (value >= prevValue) {
      result += value;
    } else {
      // Otherwise, it should be subtracted
      result -= value;
    }
    // Update the previous value
    prevValue = value;
  }

  return result;
};