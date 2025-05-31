// ica11.js
let groceryItems = [];
let checkAllState = false;

const groceryList = document.getElementById("grocery-list");
const totalCountDisplay = document.createElement("p");
totalCountDisplay.id = "totalCount";
const totalPriceDisplay = document.createElement("p");
totalPriceDisplay.id = "totalPrice";
const warningDisplay = document.createElement("p");
warningDisplay.id = "budgetWarning";

document.getElementById("list-container").append(totalCountDisplay, totalPriceDisplay, warningDisplay);

function updateTotals() {
  const totalItems = groceryItems.filter(item => !item.checked).length;
  const totalPrice = groceryItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  totalCountDisplay.textContent = `Items left to buy: ${totalItems}`;
  totalPriceDisplay.textContent = `Total cost: $${totalPrice.toFixed(2)}`;

  if (totalPrice > 100) {
    warningDisplay.textContent = "You're spending too much money!";
    warningDisplay.style.color = "red";
  } else {
    warningDisplay.textContent = "";
  }
}

function styleByPrice(total) {
  if (total > 15) return "text-danger";
  if (total > 10) return "text-warning";
  if (total > 5) return "text-secondary";
  return "";
}

function createListItem(food, quantity, price, category) {
  const li = document.createElement("li");
  const total = quantity * price;
  const classStyle = styleByPrice(total);

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    item.checked = checkbox.checked;
    updateTotals();
  });

  const content = document.createElement("span");
  content.className = classStyle;
  content.textContent = `${food}, ${quantity}, $${price}, ${category}, Total: $${total.toFixed(2)}`;

  li.append(checkbox, content);
  groceryList.appendChild(li);

  const item = { food, quantity, price, category, checked: false };
  groceryItems.push(item);
  updateTotals();
}

function setupForm() {
  const form = document.getElementById("item-add-container");

  const foodInput = document.createElement("input");
  foodInput.placeholder = "Food";

  const quantityInput = document.createElement("input");
  quantityInput.type = "number";
  quantityInput.placeholder = "Quantity";

  const priceInput = document.createElement("input");
  priceInput.type = "number";
  priceInput.placeholder = "Price";

  const categorySelect = document.createElement("select");
  ["Produce", "Dairy", "Meat"].forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categorySelect.appendChild(option);
  });

  const addButton = document.createElement("button");
  addButton.textContent = "Add Item";
  addButton.className = "btn btn-primary ms-2";
  addButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (foodInput.value && quantityInput.value && priceInput.value) {
      createListItem(foodInput.value, Number(quantityInput.value), Number(priceInput.value), categorySelect.value);
      foodInput.value = "";
      quantityInput.value = "";
      priceInput.value = "";
    }
  });

  const checkAllBtn = document.createElement("button");
  checkAllBtn.textContent = "Check All";
  checkAllBtn.className = "btn btn-secondary mt-3 me-2";
  checkAllBtn.addEventListener("click", () => {
    checkAllState = !checkAllState;
    groceryItems.forEach((item, index) => {
      item.checked = checkAllState;
      groceryList.children[index].querySelector("input").checked = checkAllState;
    });
    checkAllBtn.textContent = checkAllState ? "Uncheck All" : "Check All";
    updateTotals();
  });

  const clearBoughtBtn = document.createElement("button");
  clearBoughtBtn.textContent = "Clear Bought Items";
  clearBoughtBtn.className = "btn btn-danger mt-3";
  clearBoughtBtn.addEventListener("click", () => {
    groceryItems = groceryItems.filter((item, index) => {
      const isChecked = item.checked;
      if (isChecked) groceryList.removeChild(groceryList.children[index]);
      return !isChecked;
    });
    updateTotals();
  });

  form.append(foodInput, quantityInput, priceInput, categorySelect, addButton, checkAllBtn, clearBoughtBtn);
}

document.addEventListener("DOMContentLoaded", setupForm);
