// const coding =["java","c","Ruby","c++","javascript"]

// coding.forEach(function(item){
//     console.log(item);
// })


// coding.forEach((item) => {
//     console.log(item);
// })



// coding.forEach( (item , index , arr) => {
//     console.log(item,index,arr);
// })

// const myCoding = [
//     {
//         mylang:'javascript',
//         langfilename :'js'
//     }  ,
//     {
//         mylang:'cpp',
//         langfilename :'c++'
//     } ,
//      {
//         mylang:'python',
//         langfilename :'py'
//     }

// ]
// myCoding.forEach( (item) => {
//     console.log(item.mylang);
// } )



// const Code =myCoding.forEach(  (item) =>{
//     console.log(item);
//     return item
// })
// console.log(Code);


const myNums = [1,2,3,4,5,6,7,8,9,10]


// const newnums = myNums.filter((num) => {
//     return num > 4
// })
// console.log(newnums);

const newnums = []

myNums.forEach((num)=>{
    if(num>4)
    {
        newnums.push(num)
    }
})
console.log(newnums);