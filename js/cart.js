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
  let tableRows = document.querySelectorAll('#cart tbody tr');
  for(let i = 0; i < tableRows.length; i++){
    if(tableRows[i]){
      tableRows[i].remove();
    }
}
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbody = document.getElementById('cart');

  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  // TODO: Iterate over the items in the cart
  for (let i = 0; i < cart.items.length; i++) {
    // TODO: Create a TR
    let tr = document.createElement('tr');
    tr.setAttribute('id', i);
    tbody.appendChild(tr);
  
    // TODO: Create a TD for the delete link, quantity,  and the item

    let deleteLink = document.createElement('td');
    let button = document.createElement('button');
    button.textContent = 'X';
    button.setAttribute('data-id', i);
    button.addEventListener('click', removeItemFromCart);
    deleteLink.appendChild(button);
    tr.appendChild(deleteLink);

    let quantityTd = document.createElement('td');
    quantityTd.textContent = cart.items[i].quantity;
    tr.appendChild(quantityTd);

    let itemTd = document.createElement('td');
    itemTd.textContent = cart.items[i].product;
    tr.appendChild(itemTd);
  }
}

function removeItemFromCart(event) {

   // TODO: When a delete link is clicked, rebuild the Cart array without that item
   if (event.target.classList.contains("btnDelete")) {
    if (confirm("Are You Sure You Want To Delete This Item?")) {
      removeLocalStorage();
      let li = event.target.parentElement;
      itemList.removeChild(li);
    }
  }
   renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
console.log(cart);