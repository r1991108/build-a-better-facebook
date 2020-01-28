// build a database
var database=[
    {
        username: "Ben",
        password: "benben",
    },
    {
        username: "Sally",
        password: "123",
    },
    {
        username: "Ingrid",
        password: "777",
    }
];

// create informations that are posted after accessing successfully
var newsFeed =[
    {
        username: "Bobby",
        timeline: "So tired.",
    },
    {
        username: "Sally",
        timeline: "Javascript is so cool!",
    }
];

// to check whether isUserValid(username, password) is true or false
function isUserValid(username, password){
    for (var i=0; i<database.length; i++){
        if(database[i].username === username &&
            database[i].password === password){
                return true;
            }
    }
    return false;
}

// if isUserValid(username, password) is true, console.log(newsFeed); if not, alert("sorry, wrong info")
function signIn(username, password) {
    
    if(isUserValid(username, password)){
        console.log(newsFeed);
    }else{
        alert("Sorry, wrong username or password");
    }
 }

//  let browser ask user's name and password
 var userNamePrompt = prompt("What's your username?");
 var passwordPrompt = prompt("What's your password?");

//  run signIn(userNamePrompt, passwordPromp)
 signIn(userNamePrompt,passwordPrompt)

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// // another way of coding (return)
// var username = prompt("what's your name");
// var password = prompt("what's your password");

// function isIdValid(){

//     for (var i=0; i<database.length; i++){
//         if (database[i].username === username && database[i].password === password){
//             return console.log(newsFeed);
//         }else {
//             return alert("username or password is wrong");
//         }
//     }
// }

// isIdValid();