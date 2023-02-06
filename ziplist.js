function zipList(a, b) {
  if (a.length !== b.length) {
    return 'lists need to be same length';
  }
  const retuList = [];
  for (let i = 0; i < a.length; i++) {
    retuList.push(a[i]);
    retuList.push(b[i]);
  }
  return retuList;
}

function zipListTheSimpleWay(a, b) {
  return _.flatten(_.zip(a, b));
}

const a = ['a', 'b', 'c'];
const b = [1, 2, 3];

console.log(zipList(a, b));
console.log(zipListTheSimpleWay(a, b));
