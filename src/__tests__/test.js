const { calculateTotal } = require('../calculate.js')
test('basic test', () => {
    const result = 4;
    expect(result).toBe(4);
});

+-/*st('calculateTotal sum wuthout discount', () => {
     const list = [
         {
             id: 456,
             name: 'Война и мир',
             count: 3,
             price: 400
         },
         {
             id: 77,
             name: 'JavaScript',
             count: 1,
             price: 1300
         }
     ];

     const result = calculateTotal(list);
     expect(result).toBe(2500)
})
*/
