var items = [];
function addItem(item) {
  items.push(item);
}
addItem("Apple");
addItem("Banana");
console.log(items);


function readItems() {
  items.forEach(function (item, index) {
    console.log(index + ": " + item);
  });
}
readItems();


function updateItem(index, newItem) {
  items[index] = newItem;
}
updateItem(0, "Orange");
console.log(items);


function deleteItem(index) {
  items.splice(index, 1);
}
deleteItem(1);
console.log(items);