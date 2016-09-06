var items = [{
  id: 1,
  price: 10,
  name: 'bike'
},{
  id: 2,
  price: 20,
  name: 'tv'
},{
  id: 3,
  price: 100,
  name: 'laptop'
},{
  id: 4,
  price: 30,
  name: 'shirt'
}];
//return an array of ids using map Function

var ids = items.map(function(item) {
  console.log(item.id, item.name, item.price);
  return item.id;
})