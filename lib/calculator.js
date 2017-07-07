/* This module contains the logic for calculating how much the user's initial
 * savings amount will be worth over the next 50 years, to a monthly precision.
 * This assumes that the monthly amount is paid in each month, and the value
 * rises with the interest rate supplied.
 * Assumes the interest rate is calculated monthly (unless otherwise specified),
 * it is fixed and it is calculated on the full balance at the end of each month.
 * Also assumes there are no taxes nor withdrawals.
 */
const years = 50,
      months = years * 12

module.exports = ({initialSavings, monthlySavings, interestRate, interestFrequency}) => {
  const result = [initialSavings],
        divisor = interestDivisor(interestFrequency),
        interestDecimal = interestRate / divisor / 100

  let interest = 0

  for (let i = 1; i <= months; i++) {
    const newBalance = result[0] + monthlySavings
    interest = newBalance * interestDecimal
    const sum = newBalance + interest
    result.unshift(sum)
    interest = 0
  }

  return result.map(roundHalfToEven).reverse()
}

roundHalfToEven = n => Math.round(n * 100) / 100

interestDivisor = str => {
  switch (str) {
    case 'Annually':
      return 1
    case 'Quarterly':
      return 4
    default: // Monthly
      return 12
  }
}
