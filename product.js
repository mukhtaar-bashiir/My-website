// References to HTML elements
const addProductForm = document.getElementById("add-product-form");
const productList = document.getElementById("product-list");

// Array to store products
let products = [];

// Handle form submission
addProductForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form submission

  // Get form values
  const productName = document.getElementById("product-name").value.trim();
  const productQuantity = document.getElementById("product-quantity").value.trim();
  const productPrice = document.getElementById("product-price").value.trim();

  if (productName && productQuantity && productPrice) {
    // Add product to array
    products.push({
      name: productName,
      quantity: productQuantity,
      price: productPrice,
    });

    // Update product list display
    updateProductList();

    // Clear the form
    addProductForm.reset();
  }
});

// Update product list
function updateProductList() {
  productList.innerHTML = ""; // Clear current list
  products.forEach((product, index) => {
    const row = document.createElement("tr");

    const cellIndex = document.createElement("td");
    cellIndex.textContent = index + 1;

    const cellName = document.createElement("td");
    cellName.textContent = product.name;

    const cellQuantity = document.createElement("td");
    cellQuantity.textContent = product.quantity;

    const cellPrice = document.createElement("td");
    cellPrice.textContent = `$${product.price}`;

    row.appendChild(cellIndex);
    row.appendChild(cellName);
    row.appendChild(cellQuantity); // Quantity before Price
    row.appendChild(cellPrice);

    productList.appendChild(row);
  });
}

