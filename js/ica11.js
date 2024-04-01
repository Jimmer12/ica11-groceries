// JavaScript code goes here
let groceryItems = [];

function renderList() {
	const listElement = document.getElementById("grocery-list");
	listElement.innerHTML = "";

	for (const item of groceryItems) {
		const listItem = document.createElement("li");
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.checked = item.checked;
		checkbox.addEventListener("change", () => {
			item.checked = checkbox.checked;
			renderList();
		});

		listItem.appendChild(checkbox);
		listItem.appendChild(document.createTextNode(item.name));
		listElement.appendChild(listItem);
	}

	document.getElementById("total-count").textContent = groceryItems.filter(
		(item) => !item.checked
	).length;
}

function addItem() {
	const itemName = document.getElementById("itemInput").value.trim();
	if (itemName) {
		groceryItems.push({ name: itemName, checked: false });
		document.getElementById("itemInput").value = "";
		renderList();
	}
}

function buyAll() {
	for (const item of groceryItems) {
		item.checked = true;
	}
	renderList();
}

function clearCheckedItems() {
	groceryItems = groceryItems.filter((item) => !item.checked);
	renderList();
}


/* Problem 5
document.getElementById("totalCount").textContent = groceryItems.filter(
		(item) => !item.checked
	).length;
*/

/* Problem 7
groceryItems = groceryItems.filter((item) => !item.checked);
*/