for(let i =0 ;i<10;i++)
{
    console.log(i);
}

let myArray = ["flash","Superman","Batman","Ironman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}



// Break and Continue //

for (let index = 1; index <= 20; index++) {
    console.log(`Value of i is ${index}`);
    if(index==5)
    {
        console.log( ` Detected `+index)
        break
    }
    
}