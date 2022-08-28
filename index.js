function myEach(collection, callback) {
  for (let i = 0; i < Object.values(collection).length; i++) {
    callback(Object.values(collection)[i]);
  }
  return collection;
}
function myMap(collection, callback) {
  const arr = [];
  for (let i = 0; i < Object.values(collection).length; i++) {
    arr.push(callback(Object.values(collection)[i]));
  }
  return arr;
}
function myReduce(collection, callback, acc) {
  let sum = acc ? acc : Object.values(collection)[0];
  for (let i = sum === Object.values(collection)[0] ? 1 : 0; i < Object.values(collection).length; i++) {
    sum = callback(sum, Object.values(collection)[i], Object.values(collection));
  }
  return sum;
}
function myFind(collection, predicate) {
  for (let i = 0; i < Object.values(collection).length; i++) {
    if (predicate(Object.values(collection)[i])) return Object.values(collection)[i];
  }
  return;
}
function myFilter(collection, predicate) {
  const arr = [];
  for (let i = 0; i < Object.values(collection).length; i++) {
    if (predicate(Object.values(collection)[i])) arr.push(Object.values(collection)[i]);
  }
  return arr;
}
function mySize(collection) {
  let counter = 0;
  for (const item of Object.values(collection)) {
    counter++;
  }
  return counter;
}
function myFirst(array, index) {
  return index ? array.slice(0, index) : array[0];
}
function myLast(array, index) {
  return index ? array.slice(-index) : array.slice(-1)[0];
}
const myKeys = (object) => {
  return Object.keys(object);
};

const myValues = (object) => {
  return Object.values(object);
};
