/* This module contains the logic for calculating how much the user's initial
 * savings amount will be worth over the next 50 years, to a monthly precision.
 * This assumes that the monthly amount is paid in each month, and the value
 * rises with the interest rate supplied.
 * Assumes the interest rate is calculated monthly, it is fixed and it is
 * calculated on the full balance at the end of each month.
 * Also assumes there are no taxes nor withdrawals.
 */

const years = 50,
      months = years * 12 - 1

module.exports = ({initialSavings, monthlySavings, interestRate}) => {

  let result = [initialSavings]

  for (let i = 0; i < months; i++) {
    const newAmount = result[0] + monthlySavings
    const monthlyInterestRate = interestRate / 12 / 100
    const interest = newAmount * monthlyInterestRate
    const newBalance = roundHalfToEven(newAmount + interest)
    result.unshift(newBalance)
  }

  return result.reverse()
}

roundHalfToEven = n => Math.round(n * 100) / 100
