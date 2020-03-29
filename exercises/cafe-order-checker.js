const checkOrders = (takeOutOrders, dineInOrders, servedOrders) => {
  const takeOut = [];
  const dineIn = [];
  for (order of servedOrders) {
    if (takeOutOrders.includes(order)) takeOut.push(order);
    if (dineInOrders.includes(order)) dineIn.push(order);
  }
  return JSON.stringify(takeOut) === JSON.stringify(takeOutOrders) &&
    JSON.stringify(dineIn) === JSON.stringify(dineInOrders);
};

module.exports = checkOrders;
