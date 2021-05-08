//Example 1
let rating = 3;
if (rating === 3) {
    console.log("You are a SuperStar!")
}

//Example 2
let highScore = 1458
let currScore = 1345
if (currScore >= highScore) {
    console.log(`Congrats! this is new high score ${currScore}.`)
    highScore = currScore
}
else {
    console.log(`Game Over! you didnot score ${highScore}.`)
}

//Example 3 PassWord Check
let password = "qwer";
if (password.length >= 6) {
    if (password.indexOf(" ") === -1) {
        console.log("Valid Password!")
    }
    else {
        console.log("password contains space.")
    }
}
else {
    console.log("Password is not large enough.")
}

//Example 4 Truty and falsy value
let num = 5
if (num) {
    console.log("TRUTHY")
}
else {
    console.log("FALSY")
}

//Example 5 Logical &&
let password2 = "cat dog"
if (password2.length >= 6 && password2.indexOf(" ") === -1) {
    console.log("Valid Password")
} else {
    console.log("Invalid Password!")
}

//Example 6 Logical ||
let age = 78
if (age < 6 || age >= 65) {
    console.log("YOU GET  IN FOR FREE")
}
else {
    console.log("YOUMUST PAY!")
}

//Example 7 Logical NOT  !
let loggedInUser;
if (!loggedInUser) {
    console.log("GET OUT OF HERE!")
}

//Example 8 Switch statement
let day = 3
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thrusday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid Day")
}

//Example 9 Ternary operator
let status = "offline"
let color = status === "offline" ? "red" : "green"
console.log(color)