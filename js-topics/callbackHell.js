// callback is a function that you pass into another function as an argument for executing later.

const cart = ["pot", "bag", "glass"];

api.createOrder(cart, function () {
  api.proceedToPayment();
});
