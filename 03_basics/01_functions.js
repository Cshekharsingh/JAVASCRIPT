function saymyname()
{
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
    console.log("H");
    console.log("A");
    console.log("R");
}
saymyname()
function sum(number1 , number2 ){
    console.log(number1+number2);

}
// sum(2,4)
function loginUsername (username)
{
    if(username==undefined)
        console.log("Please Enter a username ")
        return
    return `${username} just logged in`
}
// console.log(loginUsername("Shekhar"));
console.log(loginUsername());

// ******************************************************************//


function calculateCartPrice (...num1 ){
        return num1
}
console.log(calculateCartPrice(200,300,400))

const user ={
    userName :"Shekhar",
    price:199
}

function Object (anyobject)
{
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}
Object(user)


const Array1 =[1,2,3,4,4,5]

// function newArray (arr){
//     return arr
// }
// console.log(newArray(Array1));

function newArray(getArray)
{
    return getArray[1]
}
console.log(newArray(Array1));