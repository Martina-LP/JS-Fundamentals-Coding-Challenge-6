// Steven is building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, 
// the tip is 20%.

// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. Let's use arrays! So create an array 'bills' containing the test data below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip

// Test data: 125, 555 and 44.

const calcTip = function(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; -> same but using arrow function

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

