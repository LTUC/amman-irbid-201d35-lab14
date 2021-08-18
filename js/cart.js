/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart = [];
let tbody = document.getElementsByTagName('tbody')[0];

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
  tbody.innerHTML = '';


}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

   
  for (var i = 0; i < cart.length; i++){
  
  
  let td = document.createElement('td');
  
  
  
  td.textContent = ' X ';

  td.classList.add('remover');
 
  
  td.id = i;

 
  let tr = document.createElement('tr');
 
  tbody.appendChild(tr);
  
  tr.appendChild(td);

  tr.appendChild(document.createElement('td')).textContent = cart[i].quantity;
  tr.appendChild(document.createElement('td')).textContent = cart[i].item;
   
    
  document.getElementById('itemCount').textContent = '(' + cart.length + ')';
  
  
  
  }
  
  // for (let i = 0; i < cart.items.length; i++) {
  //   let trEl = document.createElement('tr');
  //   trEl.setAttribute('id',i);
    
    
  //   let tdEl = document.createElement('td');
  //   tdEl.textContent = 'X';
  //   trEl.appendChild(tdEl);
    
  //   let qunId = document.createElement('td');
  //   qunId.textContent = cart.items[i].quantity;
  //   trEl.appendChild(qunId);
    
  //   let itemId = document.createElement('td');
  //   itemId.textContent = cart.items[i].itemId;
  //   trEl.appendChild(itemId);
    // tdEl.textContent = 
    
    // trEl.appendChild(tdEl);
    // tdEl.textContent = cart[i].quantity  ;
    
    // tbody.appendChild(trEl);
    
    // TODO: Find the table body
    
    // TODO: Iterate over the items in the cart
    // TODO: Create a TR
    // TODO: Create a TD for the delete link, quantity,  and the item
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    
  }




  function removeItemFromCart(event) {
    if (event.target.classList.contains('remover')){
 
    // TODO: When a delete link is clicked, rebuild the Cart array without that item

    cart.splice(event.target.id, 1);

    // TODO: Save the cart back to local storage

    localStorage.setItem('cart', JSON.stringify(cart));
 
    //same thing as line 62 localStorage['cart'] = JSON.stringify(Cart));

    // TODO: Re-draw the cart table

    renderCart();
 
    }

    
    }

// This will initialize the page and draw the cart on screen
renderCart();
