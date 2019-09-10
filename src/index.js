const cart = [10, 5, 15];

const SHIPPING_COST = 10;

const fakeAPICharge = total => true;
const fakeSendRecipt = total => true;

const getSubTotal = cart => cart.reduce((tempTotal, item) => tempTotal + item);

const getTotal = subTotal => subTotal + SHIPPING_COST;

const sendRecipt = (email, total) =>
  fakeSendRecipt({
    email,
    total
  });

const checkout = cart => {
  const subtotal = getSubTotal(cart);
  const total = getTotal(subtotal);
  const orderSuccess = fakeAPICharge(total);
  if (orderSuccess) {
    sendRecipt({
      email: "fakeemail@gmail.com",
      total
    });
  }
  return orderSuccess;
};

checkout(cart);
