//Find the cheapest phone from an array of phone objects

const phones = [
    { name: 'sumsung', price: 4000, camera: 6, storage: 4 },
    { name: 'vivo', price: 1000, camera: 2, storage: 1 },
    { name: 'nokia', price: 3000, camera: 8, storage: 6 },
    { name: 'oppo', price: 6000, camera: 10, storage: 8 },
    { name: 'walton', price: 7000, camera: 16, storage: 16 },
    { name: 'htc', price: 8000, camera: 4, storage: 8 }
];
let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }

}

console.log(cheapest);