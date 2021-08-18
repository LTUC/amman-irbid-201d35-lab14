/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems  = JSON.parse(localStorage.getItem('cart')) || [];
  let cartArr = [];
  for (let i = 0; i < cartItems .items.length; i++) {
    cartArr.push(new CartItem(cartItems .items[i].product, cartItems .items[i].quantity));
  }
  cart = new Cart(cartArr);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let cartTBodyEls = document.getElementById('cart').getElementsByTagName('tbody');
  for (let tBodyEl of cartTBodyEls) {
    while (tBodyEl.firstChild) {
      tBodyEl.removeChild(tBodyEl.firstChild);
    }
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

    // TODO: Find the table body
  let cartTBodyEls = document.getElementById('cart').getElementsByTagName('tbody');
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (let i = 0; i < 1; i++) {
    let cartTBodyEl = cartTBodyEls[i];
    
    for (let j = 0; j < cart.items.length; j++) {    
      let newRowEl = document.createElement('tr');      
      let deleteTDEl = document.createElement('td');
      deleteTDEl.setAttribute('id', cart.items[j].product);

      let anchorEl = document.createElement('a');
      anchorEl.setAttribute('href', '#delete-link');
      anchorEl.setAttribute('id', cart.items[j].product);
      anchorEl.addEventListener('click', removeItemFromCart);
      anchorEl.innerText = 'X';
      deleteTDEl.appendChild(anchorEl);
      newRowEl.appendChild(deleteTDEl);
      
      let qtyTDEl = document.createElement('td');
      qtyTDEl.innerText = cart.items[j].quantity;
      newRowEl.appendChild(qtyTDEl);

      let itemTDEl = document.createElement('td');
      itemTDEl.innerText = cart.items[j].product;
      newRowEl.appendChild(itemTDEl);
      cartTBodyEl.appendChild(newRowEl);
    }
  }
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  let itemToRemove = event.target.id;
  for (let i = 0; i < cart.items.length; i++) {
    if (cart.items[i].product === itemToRemove) {
      cart.removeItem(cart.items[i]);
    }

  }
  
  cart.saveToLocalStorage();  
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
