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