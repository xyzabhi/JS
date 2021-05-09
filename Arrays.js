//Array introduction
//Array is a collection of values
//Heterogenous not only store same type.
//Ordered Elements
let shoppingList = ["cereals", "cheese", "ice"]
let lotto = [1, 2, 3, 4, 5, 6]
let myCollection = [1, "hello", true, [1, 2, 3]]


//Array is indexed
//Index in array starts from 0 
//First element has index of 0
//Array also have length property
let colors = ["red", "green", "yellow", "violet", "blue", "black"]
console.log(colors.length)
console.log(colors[0]) //first element of colors
console.log(colors[3]) //fourth element of array
console.log(colors[colors.length - 1]) //Last element of array
console.log(colors[12]) //not  a valid index for this array.

//Modifying array
//Array are Mutable unlike array,We can change.
let shoppingList2 = ["cheder cheeese", "2% Milk"]
console.log(shoppingList2)
shoppingList2[1] = "Whole Milk";//Updating value value at index 1
console.log(shoppingList2)
shoppingList2[shoppingList2.length] = "Tomatoes" //Adding new element to the last
shoppingList2[shoppingList2.length] = "Potatoes" //Adding new element to the last
console.log(shoppingList2)

