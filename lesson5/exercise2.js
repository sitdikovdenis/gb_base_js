var basket = {
    items: [
        { name: 'phone', price: 30000 },
        { name: 'headphones', price: 3000 },
        { name: 'case', price: 1000 }
    ],

    countBasketPrice: function () {
        var sum = 0;
        for (i = 0; i < this.items.length; i++) {
            goods = this.items[i];
            sum += goods.price;
        }
        return sum;
    }
}


var basket2 = {
    items: [],

    countBasketPrice: function () {
        var sum = 0;
        for (i = 0; i < this.items.length; i++) {
            goods = this.items[i];
            sum += goods.price;
        }
        return sum;
    }
}


function generateBasket(basket) {
    console.log(basket.items);
    if (basket.items.length > 0) {
        var basketDiv = document.getElementById("basket");
        var p = document.createElement("p");
        p.innerHTML = 'В корзине: ' + basket.items.length + ' товаров на сумму ' + basket.countBasketPrice() + ' рублей';
        basketDiv.appendChild(p);

        var table = document.createElement("table");
        table.setAttribute('class', 'chess_board_table')
        basketDiv.appendChild(table);
        for (i = 0; i < basket.items.length; i++) {
            var line = document.createElement("tr");
            table.appendChild(line);

            var row = document.createElement("td");
            row.innerHTML = basket.items[i].name
            line.appendChild(row);

            var row = document.createElement("td");
            row.innerHTML = basket.items[i].price
            line.appendChild(row);
        }
    }

    else {
        var basketDiv = document.getElementById("basket");
        var p = document.createElement("p");
        p.innerHTML = 'Корзина пуста';
        basketDiv.appendChild(p);
    }

}


function generateBasketOnLoad() {
    chessBoard();
    generateBasket(basket);
}

window.onload = generateBasketOnLoad;
