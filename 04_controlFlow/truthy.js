const userEmail ="Shekhar.ai"
if (userEmail) {
    console.log("Got user email");
}
else
{
    console.log("Don't have user Email");
}


/// falsy values //////////

// false ,0,-0,BigInt,0n , "", null,undefined,NaN



/// truthy values /////////
//"0",'false'," ",[], {} ,function(){}



if (userEmail.length===0) {
    console.log("Array is Empty");
}

const EmptyObj ={}

if (Object.keys(EmptyObj).length===0) {
    console.log("Object is Empty");
}


//************Nullish coalescing Operator  *******************//

let val1;
val1 = 5??10
console.log(val1);



//*************ternary Operator ********************//

//Condition ? true : false 

const iceTeaPrice =100
iceTeaPrice <=80 ? console.log("Less than 80"):console.log("more than 80")