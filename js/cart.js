/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
let table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
    let rawJSONCart = JSON.parse(localStorage.getItem('cart')) || [];
    let cartItemsArray = new Array();
    for (let i = 0; i < rawJSONCart.items.length; i++) {
        cartItemsArray.push(new CartItem(
            rawJSONCart.items[i].product,
            rawJSONCart.items[i].quantity));
    }
    cart = new Cart(cartItemsArray);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
    loadCart();
    clearCart();
    showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
    let cartTBodyEls = document.getElementById('cart').getElementsByTagName('tbody');
    for (let tBodyEl of cartTBodyEls) {
        while (tBodyEl.firstChild) {
            tBodyEl.removeChild(tBodyEl.firstChild);
        }
    }
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

    // DONE: Find the table body
    let cartTBodyEls = document.getElementById('cart').getElementsByTagName('tbody');
    /*
    Having a tbody element without an Id seems like bad design to me, as there is
    nothing stopping a table element from having multiple tbody elements.
    There's not a good way of handling the possibility of multiple un-Id-ed tbody
    elements, but it seems the best option is to just render the table in the first
    one and ignore the rest. Thus the for loop below that only goes to cartTBodyEls[0].
    */
    for (let i = 0; i < 1; i++) {
        let cartTBodyEl = cartTBodyEls[i];
        // DONE: Iterate over the items in the cart
        for (let j = 0; j < cart.items.length; j++) {
            // DONE: Create a TR
            let newRowEl = document.createElement('tr');
            // DONE: Create a TD for the delete link, quantity,  and the item
            //delete link
            let deleteTDEl = document.createElement('td');
            deleteTDEl.setAttribute('id', cart.items[j].product);
            let anchorEl = document.createElement('a');
            anchorEl.setAttribute('href', '#delete-link');
            anchorEl.setAttribute('id', cart.items[j].product);
            anchorEl.addEventListener('click', removeItemFromCart);
            anchorEl.innerText = 'X';
            deleteTDEl.appendChild(anchorEl);
            newRowEl.appendChild(deleteTDEl);
            //qty td
            let qtyTdEl = document.createElement('td');
            qtyTdEl.innerText = cart.items[j].quantity;
            newRowEl.appendChild(qtyTdEl);
            //item
            let itemTDEl = document.createElement('td');
            itemTDEl.innerText = cart.items[j].product;
            newRowEl.appendChild(itemTDEl);
            // DONE: Add the TR to the TBODY and each of the TD's to the TR
            cartTBodyEl.appendChild(newRowEl);
        }
    }
}

function removeItemFromCart(event) {
    // DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
    let itemToRemove = event.target.id;
    for (let i = 0; i < cart.items.length; i++) {
        if (cart.items[i].product === itemToRemove) {
            cart.removeItem(cart.items[i]);
        }
    }
    // DONE: Save the cart back to local storage
    cart.saveToLocalStorage();
    // DONE: Re-draw the cart table
    renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();