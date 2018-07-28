var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var itemName = getCart(item);
  var object = {itemName: item, itemPrice: (Math.floor((Math.random() * 100) + 1))};
     cart.push(object);
  return `${item} has been added to your cart.`
 }

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.'
  } else if (cart.length > 0) {
    var itemAndPrices = [];
    for (var i = 0; i < cart.length; i++) {
      itemAndPrices.push(`${cart[i]["itemName"]} at $${cart[i]["itemPrice"]}`);
    return `In your cart, you have ${itemAndPrices}.`
          }    
      } else if (cart.length === 2) {
        return `In your cart, you have ${itemAndPrices[i]}, and ${itemAndPrices[i++]}.`
      } else if (cart.length >= 3) {
        itemAndPrices.join('  ,   ,  and ')
      }

}

function total() {
 var sum = 0;
 for (var i = 0; i < cart.length; i++) {
   sum += (cart[i]["itemPrice"])
      }
 return sum;
}

function removeFromCart(item) {
 if (item === true) {
  cart.splice(0, item[i]);
    return cart;
 } else if (item !== true) {
   return 'That item is not in your cart.';
 }
}

function placeOrder(cardNumber) {
  if (cardNumber !== true) {
    return "Sorry, we don't have a credit card on file for you.";
  } else if (cardNumber === true) {
    cart.splice(0);
  return `Your total cost is ${total()}, which will be charged to the card ${cardNumber}.`;
      }
}
