const products =
    [
        { name: 'laptop', price: 4000 },
        { name: 'watch', price: 400 },
        { name: 'shirt', price: 500 },
        { name: 'phone', price: 4000 }
    ];

let totalprice = 0;
for (const product of products) {
    totalprice = totalprice + product.price;

}
//console.log('totalprice:',totalprice);

const cart =
    [
        { name: 'laptop', price: 4000, quantity: 1 },
        { name: 'watch', price: 400, quantity: 4 },
        { name: 'shirt', price: 500, quantity: 5 },
        { name: 'phone', price: 4000, quantity: 8 }
    ];

let price = 0;
for (const product of cart) {
    const totalproduct = product.price * product.quantity;
    price = price + totalproduct;

}
console.log(price);