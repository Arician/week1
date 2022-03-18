const coffeeShop = {
    branch: 'Manchester',
  
    drinks: {
      americano: 2,
      latte: 2.50,
      espresso: 1.5,
      capuccino: 3,
    },
  
    food: {
      cookie: 1.5,
      muffin: 2,
      sandwich: 3,
    },
  
    drinksOrdered(...drinks) {
      let cost = 0;
      const drinksStr = drinks.join(' & ');
      drinks.forEach(drink => (cost += this.drinks[drink]));
      cost = cost.toString().split('.');
      cost[1] = cost[1].padEnd(2, '0');
      cost = cost.join('.');
  
      return this.displayOrder(drinksStr, cost);
    },
  
    foodOrdered(...food) {
      let cost = 0;
      const foodStr = food.join(' & ');
  
      food.forEach(item => (cost += this.food[item]));
  
      cost = cost.toString().split('.');
      cost[1] = cost[1].padEnd(2, '0');
      cost = cost.join('.');
  
      return this.displayOrder(foodStr, cost);
    },
  
    displayOrder(order, cost) {
      return console.log(
        `Your ${order} will be with you shortly, the total is £${cost}.`
      );
    },
  };
  
  coffeeShop.drinksOrdered('capuccino', 'espresso');
  coffeeShop.foodOrdered('cookie', 'muffin');