// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Input: prices = [7,1,5,3,6,4] --->>> Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.

// Input: prices = [7,6,4,3,1] ---->>> Output: 0

// brite force soln
// function maxProfit(prices) {
//   let globalProfit = 0;

//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       const currentProfit = prices[j] - prices[i];
//       if (currentProfit > globalProfit) {
//         globalProfit = currentProfit;
//       }
//     }
//   }
//   return globalProfit;
// }

// console.log(maxProfit([7, 6, 4, 3, 1]));

// using greedy algo
const maxProfit = function (prices) {
  let minStockPurchasePrice = prices[0] || 0;
  let maxProfitSoFar = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minStockPurchasePrice) {
      minStockPurchasePrice = prices[i];
    }

    maxProfitSoFar = Math.max(
      maxProfitSoFar,
      prices[i] - minStockPurchasePrice
    );
    console.log(maxProfitSoFar, i);
  }
  return maxProfitSoFar;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// [7,1,5,3,6,4]

// min = 7 => 1
// profit = 0 => 5-1 => 4 => (3-1 => 2)reject => 6-1 => 5 => {4-1 => 3}reject or remove
