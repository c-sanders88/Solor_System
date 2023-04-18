/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  const { asteroids } = data;
  let asteroidCounts = {};
  let greatestCount = 0;
  let greatestYear = null;

  for (let asteroid of asteroids) {
    const { discoveryYear } = asteroid;
    if (!asteroidCounts[discoveryYear]) {
      asteroidCounts[discoveryYear] = 0;
    }
    asteroidCounts[discoveryYear]++;
    if (asteroidCounts[discoveryYear] > greatestCount) {
      greatestCount = asteroidCounts[discoveryYear];
      greatestYear = discoveryYear;
    }
  }

  const message = `The year with the greatest number of asteroids discovered was ${greatestYear}, with a total of ${greatestCount} asteroids.`;
  console.log(message);
  return greatestYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
