var prompt = require('prompt-sync')();


let employeeDetails= [];



while(1){console.log("Enter 1 to add User");
    console.log("Enter 2 to delete User");
    console.log("Enter 3 to update User");
    console.log("Enter 4 to seach User by name");
    console.log("Enter 5 to Display all the User`s");
    const operation = prompt("Enter Number to perform operation  ");
    switch(operation)
    {
        case '1':
            addUser();
            break;
    
        case '2':
            deleteEmployee();
            break;
    
        case '3':
            updateUser();
            break;
    
        case '4':
            searchByName();
            break;
    
        case '5':
            displayEmployee();
            break;                            
    }}

