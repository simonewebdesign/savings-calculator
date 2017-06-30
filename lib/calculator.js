/* This module contains the logic for calculating how much the user's initial
 * savings amount will be worth over the next 50 years, to a monthly precision.
 * This assumes that the monthly amount is paid in each month, and the value
 * rises with the interest rate supplied.
 */

module.exports = (initialSavings, monthlySavings, interestRate) => {
  const years = 50,
        months = years * 12

  let result = initialSavings

  for (let i = 0; i < months; i++) {
    let interest = monthlySavings * interestRate / 100
    result += monthlySavings + interest
  }

  return result
}
