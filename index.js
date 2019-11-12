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
     
    ])
    .then(function(response){
        console.log(response);
  });