var myBasket = [
    { name: 'phone', price: 30000 },
    { name: 'headphones', price: 3000 },
    { name: 'case', price: 1000 }
];

function countBasketPrice(basket) {
    var sum = 0;
    for (i = 0; i < basket.length; i++) {
        goods = basket[i];
        sum += goods.price;
    }

    return sum;
}


console.log(countBasketPrice(myBasket));