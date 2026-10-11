"use strict";
// Interface
// With Description
const bedsheet = {
    id: 101,
    name: "Bed Sheet",
    price: 2000,
    descrition: "This is my bed sheet"
};
// Without Description
const iphone = {
    id: 102,
    name: "Iphone 16",
    price: 75000,
};
;
const mayank = {
    name: "Mayank",
    age: 22,
    email: "mayankchugh222@gmail.com"
};
// console.log("User is ", mayank);
function getProduct(product) {
    console.log(product);
}
getProduct({ id: 101,
    name: "Bed Sheet",
    price: 2000, });
