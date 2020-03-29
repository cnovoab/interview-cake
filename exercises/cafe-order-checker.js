const checkOrders = (takeOutOrders, dineInOrders, servedOrders) => {
  let takeOutIndex = 0;
  let dineInIndex = 0;

  for (let i = 0; i < servedOrders.length; i++) {
    if (servedOrders[i] === takeOutOrders[takeOutIndex]) {
      takeOutIndex++;
    } else if (servedOrders[i] === dineInOrders[dineInIndex]) {
      dineInIndex++;
    } else {
      return false;
    }
  }
  return takeOutIndex === takeOutOrders.length &&
    dineInIndex === dineInOrders.length;
};

module.exports = checkOrders;
