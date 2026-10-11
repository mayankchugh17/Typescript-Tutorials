// Interface

interface Product{
    id:Number,
    name:String,
    price:Number,
    descrition?:String
}

// With Description
const bedsheet:Product = {
    id:101,
    name:"Bed Sheet",
    price:2000,
    descrition:"This is my bed sheet"
};

// Without Description
const iphone:Product = {
    id:102,
    name:"Iphone 16",
    price:75000,
}



// User
interface User{
    name:String,
    age?:number,
    email:String
};
interface Admin extends User{
    permision:string
}

const superAdmin : Admin ={
    name:"Mayank",
    email:"Mayankchu@gmail.com",
    permision:"Read Only"
}

const mayank : User = {
    name:"Mayank",
    age:22,
    email:"mayankchugh222@gmail.com"
};

// console.log("User is ", mayank);

function getProduct(product:Product):void{
    console.log(product);
}

getProduct({id:101,
    name:"Bed Sheet",
    price:2000,})