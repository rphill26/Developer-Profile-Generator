var inquirer = require("inquirer");

inquirer 
  .prompt([
      {
        type: "input", 
        message: "What's your favorite color?",
        name: "color"
      }, 
      {
        type: "input",
        message: "What is your GitHub Username?", 
        name: "username"
      },
      {
        type: "password",
        message: "What is your password?", 
        name: "password"
      },
      {
        type: "password",
        message: "Re-enter password to confirm:", 
        name: "confirm"
      },
     
    ])
    .then(function(response){
        console.log(response);
        if (response.confirm === response.password){
            console.log("Success!");
        } 
        else {
            console.log("Your passwords don't match!");
        }
  });