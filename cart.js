///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const subtotal = cart.reduce((acc, cur) => {
    return acc + cur.price;}, 0)

console.log(subtotal)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

function calcFinalPrice(cartTotal, couponValue, tax) {
    let finalPrice = cartTotal + (cartTotal * tax) - couponValue

    return finalPrice
}
console.log(calcFinalPrice(subtotal, 5, .05))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    first we need a name and a last name, we need to be able to make this file for them because the cart needs
    to know if the customer is enrolled in the rewards program. The customer also needs an email address to access
    his profile to keep track of his rewards program. and last we need a verificator to check if the customer is a 
    rewards account holder. 


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'john@smith.com',
    enrolled: "enrolled",
    checkEnrollment: function(){
        return customer.firstName + ' ' + customer.lastName + ' is ' + customer.enrolled

    }

    }

    console.log(customer.checkEnrollment())
