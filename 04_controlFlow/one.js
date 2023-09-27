// IF statement 
const isLoggedIn = true
const temperature = 41

if(temperature <50)
{
    console.log("less than 50 ");
}



const score = 200

if(score>100)
{
    const power = "fly"
    console.log(`User Power:${power}`);
}
// console.log(`User Power:${power}`); --------------- Error because of block


const balance = 1000
if(balance >500)
    console.log("test");



if (balance < 500) {
    console.log("less than ");
}
else if(balance<750)
{
    console.log("less than");
}
else if (balance<900) {
    console.log("less than");
}
else
    console.log("less than 1200");

    const userLoggedIn = true
    const DebitCard = true
    if (userLoggedIn && DebitCard) {
        console.log("Allow to buy Course");
    }