/* global Product, Cart */

'use strict';
let allProducts = [];
let products = [
  {
      name: "bag",
     
  },
  {
      name: "banana",
      
  },
  {
      name: "bathroom",
      
  },
  {
      name: "boots",
      
  },
  {
      name: "breakfast",
     
  },{
      name: "bubblegum",
     
  },
  {
      name: "chair",
      
  },
  {
      name: "cthulhu",
      
  },
  {
      name: "dog-duck",
      
  },
  {
      name: "dragon",
      
  },
  {
      name: "pen",
      
  },
  {
      name: "pet-sweep",
     
  },
  {
      name: "scissors",
      
  },
  {
      name: "shark",
      
  },
  {
      name: "sweep",
     
  },
  {
      name: "tauntaun",
     
  },
  {
      name: "unicorn",
      
  },
  {
      name: "usb",
  },
  {
      name: "water-can",
      
  },
  {
      name: "wine-glass",
     
  },
];

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  function Product(name){
    this.name = name;
    allProducts.push(this);
};
function createProducts() {
  for(let i = 0; i < products.length; i++){
    new Product(products[i].name);
  }
  console.table(allProducts);
};
function Render() {
  let productSection = document.getElementById ("catalog");
  let itemsList = document.getElementById("items");
  for(let i = 0; i < allProducts.length; i++){
    //randomProducts[i].views++;
    let imgContainer = document.createElement("div");
    let form = document.createElement("form");
    let options = document.createElement("option");
    imgContainer.setAttribute('id',allProducts[i].name);
    imgContainer.setAttribute('class', 'imageContainer');
    productSection.appendChild(imgContainer);
    form.addEventListener('click', addSelectedItemToCart);
    options.textContent = allProducts[i].name;
    imgContainer.appendChild(form);
    itemsList.appendChild(options);
};
  //TODO: Add an <option> tag inside the form's select for each product
  let selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
	  let option = document.createElement('option');
	  option.textContent = Product.allProducts[i].name;
	  selectElement.appendChild(option);
  }
}
  createProducts();
  Render();
}


// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  
  // TODO: Prevent the page from reloading
	event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();  
  saveCartToLocalStorage();
  updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, create a new Cart item instance
  let selectElement = document.getElementById('items');
  let quantityElement = document.getElementById('quantity');
  let newItem = new Cart(selectElement.value, quantityElement.value);
}

// TODO: Save the contents of the cart to Local Storage
function saveCartToLocalStorage() {
	localStorage.setItem('cart', JSON.stringify(Cart.allItems));
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
	let quantityElement = document.getElementById('quantity');
  let itemCount = document.getElementById('itemCount');
  if (itemCount.textContent !== '') {
    itemCount.textContent =
      parseInt(itemCount.textContent) + parseInt(quantityElement.value);
    console.log(quantityElement.value);
  } else {
    itemCount.textContent = parseInt(quantityElement.value);
  }
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
  let selectElement = document.getElementById('items');
  let quantityElement = document.getElementById('quantity');
  let cartPreview = document.getElementById('cartContents');
  let cartItem = document.createElement('p');
  cartItem.classList.add('animate-added-cart');
  cartItem.textContent = `${selectElement.value} added to cart! ${
    quantityElement.value
  } item(s)`;
  cartPreview.appendChild(cartItem);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
let catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.

populateForm();