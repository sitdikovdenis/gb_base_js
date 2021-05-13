var nameInd = 0, priceInd = 1

var myBasket = [
    ['phone', 30000],
    ['headphones', 3000],
    ['case', 1000]
];

function countBasketPrice(basket) {
    var sum = 0;
    for (i = 0; i < basket.length; i++) {
        goods = basket[i];
        sum += goods[priceInd];
    }

    return sum;
}


console.log(countBasketPrice(myBasket));