// const user = {
//     username :"Shekhar",
//     price :999,

//     welcomeMesssage : function(){
//         console.log(`${this.username},Welcome to website `);
//         console.log(this);
//     }

// }
// user.welcomeMesssage()
// user.username="Sam"
// user.welcomeMesssage()

//console.log(this);




// const chai =function(){
//     let username ="Shekhar"
//     console.log(this.username);
// }


const chai =()=>{
    let username ="Shekhar"
    console.log(this);
}
chai()


const addTwo = (num1 ,num2 ) =>{
    return num1+num2
    
}
console.log(addTwo(3,4 ));

const addtwo = (num1 ,num2 ) =>(num1+num2)
console.log(addtwo(3,4 ));



const myArray = [2,3,4,5]

myArray.forEach(()=>
{
    console.log(myArray)
}
)
