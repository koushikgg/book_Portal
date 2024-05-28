const readline = require("readline-sync");

// Bookstore list
const bookStoreList = [
    {
        name: "King Kohli Story",
        price: 499,
        id: 1000,
        quantity: 10,
        status: "available"
    },
    {
        name: "Learn ABC",
        price: 99,
        id: 1001,
        quantity: 10,
        status: "available"
    },
    {
        name: "Python Tools",
        price: 150,
        id: 1002,
        quantity: 10,
        status: "available"
    },
    {
        name: "Java Tools",
        price: 180,
        id: 1003,
        quantity: 10,
        status: "available"
    },
    {
        name: "Web Design",
        price: 200,
        id: 1004,
        quantity: 10,
        status: "available"
    }
];

const cart = [];
var condition = true;

while (condition) {
    let userInput = readline.questionInt("The Book Portal Menu\n 1. show available books\n 2. add book\n 3. show cart\n 4. Exit\n");
    if (userInput != 1 && userInput != 2 && userInput != 3 && userInput != 4) {
        console.log("Please Enter in Below Range Only");
        continue;
    }
    switch (parseInt(userInput)) {
        case 1:
            showBooks();
            break;
        case 2:
            addBooks();
            break;
        case 3:
            showCart();
            break;
        case 4:
            condition = false;
            break;
        default:
            console.log("Invalid Input Please Enter Valid Input");
            continue;
    }
}


// This function is used to display the available books
function showBooks() {
    for (let value of bookStoreList) {
        if (value.status == "available") {
            console.log(`name: <${value.name}> price:<${value.price}> id:<${value.id}> Quantity:<${value.quantity}>`);
        }
    }
}

// This function is to add the books to the cart
function addBooks() {
    let orderBookId = readline.questionInt("Enter The Book ID to Add to Cart\n");
    let orderBookQuantity = readline.questionInt("Enter The Quantity of Book to Add to Cart\n");

    for (let value of bookStoreList) {
        if (value.id == orderBookId) {
            const cartItem = cart.find(book => book.id == orderBookId);
            if (cartItem) {
                cartItem.quantity += orderBookQuantity;
            } else {
                const newItem = { ...value};
                newItem.quantity=orderBookQuantity
                cart.push(newItem);
            }
            for (let item of bookStoreList) {
                if (orderBookId == item.id) {
                    item.quantity -= orderBookQuantity;
                    if (item.quantity <= 0) {
                        item.status = "unavailable";
                    }
                }
            }
            console.log("Book added to the cart successfully");
            return;
        }
    }
}

// This function is used to display the cart
function showCart() {
    let totalCartValue = 0;
    console.log("Your Cart List is:");
    for (let item of cart) {
        let totalPrice=item.quantity*item.price;
        totalCartValue+=totalPrice;
        console.log(`Name: <${item.name}> Price: <${item.price}> Quantity: ${item.quantity} Total Price: ${totalPrice}`);
    }
    console.log(`Your Total Cart Value is ${totalCartValue}`)
}
