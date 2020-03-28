const checkOrders = require('./index.js');

describe('Check orders', () => {
  test('Not first come - first serve', () => {
    const takeOutOrders = [1, 3, 5];
    const dineInOrders = [2, 4, 6];
    const servedOrders = [1, 2, 4, 6, 5, 3];
  
    const checkedOrders = checkOrders(
      takeOutOrders, dineInOrders, servedOrders
    );
  
    expect(checkedOrders).toBe(false);
  });

  test('Correctly served', () => {
    const takeOutOrders = [1, 3, 5];
    const dineInOrders = [2, 4, 6];
    const servedOrders = [1, 2, 3, 5, 4, 6];
  
    const checkedOrders = checkOrders(
      takeOutOrders, dineInOrders, servedOrders
    );
  
    expect(checkedOrders).toBe(true);
  });
});
