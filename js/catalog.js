
'use strict';

let cart = new Cart([]);
function populateForm() {

  let selectEl = document.getElementById('items');
  for (var i = 0; i < Product.allProducts.length; i++) {
    let oneProduct = Product.allProducts[i];
    let OptionEl = document.createElement('option');
    OptionEl.setAttribute('value', oneProduct.name);
    OptionEl.innerText = oneProduct.name;
    selectEl.appendChild(OptionEl);
  }

}

function handleSubmit(event) {

  event.preventDefault();

  addSelectedItemToCart(event);
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

function addSelectedItemToCart(event) {
  let itemPicked = event.target[1].value;
  let quantity = parseInt(event.target[2].value);
  cart.addItem(itemPicked, quantity);
}

function updateCounter() {
  document.getElementById('itemCount').innerText = ` ${cart.items.length} item${cart.items.length}`;
}

function updateCartPreview() {
  let itempicked = event.target[1].value;
  let qtyEnetered = parseInt(event.target[2].value);
  let cartContentsEl = document.getElementById('cartContents');
  let newCartItemEl = document.createElement('p');
  newCartItemEl.innerText = `${itempicked}: Qty ${qtyEnetered}`;
  cartContentsEl.appendChild(newCartItemEl);
}


var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

populateForm();