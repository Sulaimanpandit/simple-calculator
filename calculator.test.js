test('My first test case', () => {
  console.log('Hello')
});

function addnum(num1,num2){
  return num1+num2
}
test('add two number',() =>{
  console.log('num3')
expect(addnum(2,2)).toBe(4)
});
test('3 plus 3 is 6', () => {
  expect(3+ 3).toBe(6);
});
test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});