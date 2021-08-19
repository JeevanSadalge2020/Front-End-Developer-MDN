let products = ['Underpants:6.99',
    'Socks:5.99',
    'T-shirt:14.99',
    'Trousers:31.99',
    'Shoes:23.99'];
let total = 0;

for (let i = 0; i < products.length; i++) {
    const element = products[i];
    const array = element.split(':');
    let name = array[0];
    let price = Number(array[1]);
    total = total + price;
    let itemText = `${name} --- ${price}`;
    console.log(itemText);
}