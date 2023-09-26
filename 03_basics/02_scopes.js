let a = 200 
 var b =300
if(true)
{
    var v =30
    let a =10
    const b = 20
    console.log("Innner a =",a);
}
console.log(a);
console.log(v);



function one(){
    const username ="Shekhar"

    function two(){
        const website ="Youtube"
        console.log(username);
    }
   // console.log(website);
    two()

}
one()



// if(true)
// {
//     const username ="Shekhar"
//     if(username=="Shekhar")
//     {
//         const website ="Youtube"
//         console.log(username+website);
//     }
//     console.log(website);
// }
// console.log(username);





console.log(addone(5));
function addone(num1)
{
    return num1+1
}


const addTwo = function (num1)
{
    return num1+2
}
console.log(addTwo(5));