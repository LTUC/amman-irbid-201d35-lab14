/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  document.getElementsByTagName('tr').innerHTML = '';


}
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tbody = document.getElementsByTagName('tbody');
  // TODO: Find the table body
  // for (let i = 0; i < cart.items.length; i++) {
  //   let tr = document.createElement('tr');
  //   tr.setAttribute('id', i);
  //   tbody.appendChild(tr);

  //   let tdEl = document.createElement('td')
  //   tdEl.textContent = 'X';
  //   tr.appendChild(tdEl)

  //   let quantityTd = document.createElement('td');
  //   quantityTd.textContent = cart.items[i].quantity;
  //   tr.appendChild(quantityTd);

  //   let itemTd = document.createElement('td')
  //   itemTd.textContent = cart.items[i].product;
  //   tr.appendChild(itemTd);

  // }
  // showCart();

  
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  if (event.targt.textContent == 'X') {
    cart.removeItem(event.targt.id);

  }
  localStorage.setItem('cart', JSON.stringify(cart.items));
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
