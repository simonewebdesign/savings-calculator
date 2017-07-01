/* This module contains the logic for calculating how much the user's initial
 * savings amount will be worth over the next 50 years, to a monthly precision.
 * This assumes that the monthly amount is paid in each month, and the value
 * rises with the interest rate supplied.
 * It also assumes the interest rate is calculated monthly, it is
 * fixed and it is calculated on the total savings.
 */

const years = 50,
      months = years * 12 - 1

module.exports = ({initialSavings, monthlySavings, interestRate}) => {

  let result = [initialSavings]

  for (let i = 0; i < months; i++) {
    const newAmount = result[0] + monthlySavings
    const interest = parseInt(newAmount * interestRate / 100)
    result.unshift(newAmount + interest)
  }

  return result.reverse()
}
