/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
let quan =document.getElementById('quantity');
let itm =document.getElementById('items');

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
// let formEl = document.getElementsById('catalog');
function populateForm() {
  
  const selectElement = document.getElementById('items');
  //TODO: Add an <option> tag inside the form's select for each product
  for (let i in Product.allProducts) {
  
    let opEl = document.createElement('option');
    selectElement.appendChild(opEl);
    opEl.textContent = Product.allProducts[i].name;
  }

}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  event.preventDefault();
  // TODO: Prevent the page from reloading

  // Do all the things ...
  
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  cart.addItem(itm,quan); 
// 
  // cart.product = product;
// cart.quantity += quantity; 
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
let counEl = document.getElementById('itemCount');
counEl.textContent = `(${cart.items.length})`;

}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
let cartContents = document.getElementById('cartContents');
let divEl = document.createElement('div')
cartContents.appendChild(divEl);
divEl.textContent = ` ${quan.value}:  ${itm.value} `
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
