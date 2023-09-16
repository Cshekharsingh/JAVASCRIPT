//const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.IsLoggedIn ="False"

console.log(tinderUser);

const regularUser = {
    email : "chandrashekkharmn@gmail.com",
    fullname :{
        firstname :"Chandra",
        lastname :"Shekhar"
    }
}
console.log(regularUser.fullname.firstname);

const obj1 = {1:"a" ,2:"b"}
const obj2 = {3:"c" ,4:"d"}

//const obj3 = {obj1 , obj2}
const obj3 = Object.assign({},obj1 ,obj2)
console.log(obj3);


const Users = [
    {
        id:1 ,
        email:"h@gmail.com"
    },
    {
        id:1 ,
        email:"h@gmail.com"
    },
    {

        id:1 ,
        email:"h@gmail.com"
    }
]

Users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));









