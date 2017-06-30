/* This module contains the logic for calculating how much the user's initial
 * savings amount will be worth over the next 50 years, to a monthly precision.
 * This assumes that the monthly amount is paid in each month, and the value
 * rises with the interest rate supplied.
 */

const years = 50,
      months = years * 12

module.exports = (initialSavings, monthlySavings, interestRate) => {

  let result = [initialSavings]

  for (let i = 0; i < months; i++) {

    const interest = monthlySavings * interestRate / 100
    const amount = result[0] + monthlySavings + interest
    result.unshift(amount)
  }

  return result.reverse()
}
