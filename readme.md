# Introduction
Welcome to In-Class Activity number 11! This is an activity to introduce you to the basics of JavaScript.

You will be working on a series of exercises that will help you practice the JavaScript concepts covered in the tutorial. The results of your exercises will be HTML elements that will be displayed and interacted with on the ica11.html page.

## Prerequisites
`index.html` is a simple HTML file that includes instructions to go over all the JavaScript concepts that you need to know for this activity. Completion of `index.html` will not be graded, but will greatly aid you in completing the activity.

For the activity, you will be working on `ica11.js`. This file contains a series of exercises that will help you practice the JavaScript concepts covered in `index.html`. The results of your exercises will be HTML elements that will be displayed and interacted with on the `ica11.html` page.

## Activity
In this activity, you will be creating a tool that will track the foods that a user needs to buy at the grocery store. The user will be able to add a food to the list by typing it into an input box and clicking a button. The food will then be added to the list. The user will also be able to remove a food from the list by clicking on the food item.

By the end of this activity, your groceries tool will have the following features:
- A list of foods that the user needs to buy
- A checkbox next to each food item that the user can click to indicate that they have bought the item
- A total number of items still left to buy
- A button that will check all the items in the list
- A button that will clear all the bought items in the list
- A total price of the list
- Styling for the items in the list based on their total price
- A message that will display if the total price of the list exceeds a weekly budget

## Instructions
## 1. First Input Box and Button
Create an input box that will take in a string from the user. This will represent the food that the user wants to add to the list. Create a button that will add the food to the list when clicked.
> [!TIP]
> Notice that I've addressed the Bootstrap CDN library in the head of `ica11.html`. You can use Bootstrap classes and default components to add in the necessary elements for this activity. Here's a shortcut to the Bootstrap documentation on [HTML Forms](https://getbootstrap.com/docs/5.3/forms/overview/).

## 2. Display the entered food in a list, on Click
Implement the functionality to add the food to the list when the button is clicked. If you add the food "flour" and click the "Add Item" button, the list should display "flour". Allow for multiple foods to be added to the list, one by one.
> [!TIP]
> Each time a food is added to the list, you can create a new `li` element and append it to the `ul` element that will hold the list of foods. The `ul` element has an id of `grocery-list`. Remember that the `.appendChild()` method can be used to add elements to a parent element.

## 3. Three more Inputs; String, Number, and a Dropdown Menu
Create three more input boxes that will take in a number, a string, and a string from the user. This will represent the quantity, price, and category of the food that the user wants to add to the list. The category (e.g. "produce", "dairy", "meat") should be a string that is selected from a dropdown menu. Add functionality to the "Add Item" button to add the food, quantity, price, and category to the list, separated by commas.
> [!TIP]
> It'd be a good idea to create a `div` element that will hold the food, quantity, price, and category elements. Then, you can append this `div` element to the `ul` element that will hold the list of foods. 

## 4. Add a Checkbox for each Item in the List
At the beginning of each item in the list, add a checkbox that the user can click to indicate that they have bought the item.

## 5. Total Number of Items Left to Buy
Underneath the list, add text that displays the total number of items still left to buy. This number should update whenever an item is bought (the checkbox is clicked) or when an item is added to the list. At first this number should be zero, as there are no items in the list. With each item added, this number should increase by one. With each item bought, this number should decrease by one.
> [!TIP]
> This code will be provided for you in the `ica11.js` file. You will need to implement the logic to update the total number of items left to buy whenever an item is added or bought.

## 6. Buy All Items and Clear Bought Items Button
Create a button underneath the list and total that will check all the items in the list. When clicked, all the checkboxes should be checked. When clicked again, all the checkboxes should be unchecked. This button should also update the total number of items left to buy. You can name this button "Check All". Implement logic to change the text of the button to "Uncheck All" when all the checkboxes are checked.

## 7. Clear Bought Items Button
Create another button that will clear all the bought items in the list. This button should also update the total number of items left to buy. You can name this button "Clear Bought Items".

## 8. Total Price of each Item the List
Finally, for each row in the list, add more text that will display the total price of the item. This should be the price of the item multiplied by the quantity of the item. Implement logic to update the total price of the list whenever an item is added, bought, or removed.

## 9. Styling the Total Prices of each Item
You're a price conscious shopper, so you want to easily understand the items on your list that are going to take up the most of your budget. Implement logic to dynamically style the items in the list. If the total price of an item is greater than $15, make the text red. If the total price of an item is greater than $10, make the text orange. If the total price of an item is greater than $5, make the text yellow.
> [!TIP]
> You can use the `.style` property of an element to change the style of the element. For example, `element.style.color = "red";` will change the text color of the element to red. However, a much more pragmatic approach would be to use CSS classes to style the elements. You can use the `.classList` property of an element to add or remove classes from the element. For example, `element.classList.add("red-text");` will add the class "red-text" to the element, which can be defined in your CSS file.

## 10. List Price Exceeding Weekly Budget
If at any point the total price of your list exceeds your weekly budget of $100, display a message underneath the two buttons that says "You're spending too much money!" in red text.

## Submission
To submit, add, commit, and push your changes to the provided GitHub Classroom repo. I will only be looking at the necessary edits to `ica11.js` and `ica11.html`.

## Grading
Your grade will be based on the completion of the exercises in `ica11.js`. Once again, you do not need to complete the ten tutorial steps in `index.html`, but it is highly recommended that you do so to better understand the concepts.