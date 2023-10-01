const mynum = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynum.map( (num) =>{ return num+10} )
//     console.log(newnums);





const  newnms = mynum
                .map((num)=> num*10)
                .map((num)=>num+1)
                .filter((num)=> {return num>=40})
console.log(newnms);