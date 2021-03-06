'use strict'

let budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
])

let spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
})

budget[0].value = 10000

const getLimit = (user) => spendingLimits?.[user] ?? 0

let addExpense = function (state, limits, value, description, user = 'jonas') {
  const cleanUser = user.toLowerCase()

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0
  const limit = getLimit(user)

  if (value <= limit) {
    budget.push({ value: -value, description, user })
  }
}
addExpense(budget, spendingLimits, 10, 'Pizza 🍕')
addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda')
addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay')

const checkExpenses = function () {
  for (let entry of budget)
    if (entry.value < -getLimit(entry.user)) entry.flag = 'limit'
}
checkExpenses()

let logBigExpenses = function (bigLimit) {
  let output = ''
  for (let entry of budget)
    output +=
      entry.value <= -bigLimit ? `${entry.description.slice(-2)}  / ` : ''

  output = output.slice(0, -2) // Remove last '/ '
  console.log(output)
}

console.log(budget)
logBigExpenses(500)
