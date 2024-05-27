const readline = require("readline-sync");
bookStoreList=[
    {
        name: "King Kohli Story",
        price: 499,
        id:1000,
        status: "available",
        quantity: 10
    },
    {
        name: "Learn ABC",
        price: 99,
        id:1001,
        status: "available",
        quantity: 10
    },
    {
        name: "Python Tools",
        price: 150,
        id:1002,
        status: "available",
        quantity: 10
    },
    {
        name: "Java Tools",
        price: 180,
        id:1003,
        status: "available",
        quantity: 10
    },
    {
        name: "Web Design",
        price: 200,
        id:1004,
        status: "available",
        quantity: 10
    },
]
const cart = []
var condition=true;
while (condition){
    let userInput = readline.questionInt("The Book Portal Menu\n 1. show available books\n 2. add book\n 3. show cart\n 4. Exit\n")
    if (userInput!=1 && userInput!=2 && userInput!=3 && userInput!=4){
        console.log("Please Enter in Below Range Only");
        continue;
    }
    switch (parseInt(userInput))
    {
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
            condition=false;
            break;
        default:
            console.log("Inavalid Input Please Enter Valid Input")
            continue;
    }

}


//this function used to display the avialable books

function showBooks(){
    for (let value of bookStoreList){
        console.log(`name: <${value.name}> price:<${value.price}> id:<${value.id}>`)
    }
}

//this function is to add the books
function addBooks(){
    let bookId = readline.questionInt("Enter The Book ID to Add to Cart\n")
    for (let value of bookStoreList){
        if (bookId==value.id){
            cart.push(value);
        }
    }
}

//This function is used to display the cart
function showCart(){
    console.log("Your Cart List is")
    for (let item of cart){
        item.quantity=1
        console.log(`Name: <${item.name}> Price:<${item.price}> Quantity:${item.quantity}`)
    }
    
}