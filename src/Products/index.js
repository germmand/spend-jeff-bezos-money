const products = [{
    id: 1,
    name: 'Burger',
    price: 5,
    image: '/images/items/burger.jpg',
}, {
    id: 2,
    name: 'Book',
    price: 16,
    image: '/images/items/book.jpg',
}, {
    id: 3,
    name: 'Skateboard',
    price: 150,
    image: '/images/items/skateboard.jpg',
}, {
    id: 4,
    name: 'Gaming Console',
    price: 250,
    image: '/images/items/ps4.jpg',
}, {
    id: 5,
    name: 'Drone',
    price: 350,
    image: '/images/items/drone.jpg',
}, {
    id: 6,
    name: '4K TV',
    price: 900,
    image: '/images/items/4ktv.jpg',
}, {
    id: 7,
    name: 'Smartphone',
    price: 1000,
    image: '/images/items/smartphone.jpg',
}, {
    id: 8,
    name: 'Rolex',
    price: 9000,
    image: '/images/items/rolex.jpg',
}, {
    id: 9,
    name: 'Lamborghini',
    price: 200000,
    image: '/images/items/lamborghini.jpg',
}, {
    id: 10,
    name: 'MacBook Pro',
    price: 1299,
    image: '/images/items/macbook-pro.jpg',
}, {
    id: 11,
    name: 'Trip Around the World',
    price: 24000,
    image: '/images/items/world-trip.png',
}, {
    id: 12,
    name: 'Private jet',
    price: 5000000,
    image: '/images/items/private-jet.jpg'
}];

// We want it to be shown by price in ascending order.
products.sort((a, b) => a.price - b.price);

export default products;
