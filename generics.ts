// function Generics

function addNumbers<T>(a:T):T{
        return a;
    }

    console.log(addNumbers<number>(10));