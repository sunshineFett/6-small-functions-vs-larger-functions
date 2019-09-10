const cart = ["10", "5", "15"];

const fakeAPICharge = total => true;
const fakeSendRecipt = total => true;

const checkout = cart => {
  let total = cart.reduce((tempTotal, item) => tempTotal + item);
  total = total + 10;
  const orderSuccess = fakeAPICharge(total);
  if (orderSuccess) {
    fakeSendRecipt({
      email: "fakeemail@gmail.com",
      total
    });
  }
  return orderSuccess;
};

checkout(cart);
