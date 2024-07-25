var prompt = require('prompt-sync')();


let employeeDetails= [];

/////////////////////////// ADDING NEW USER ////////////////////////////////
function addUser(){
    const newUserName = prompt("Enter Your Name : ");
    const newUserid =  prompt("Enter Your UserID : ");
    const newUserCity =  prompt("Enter Your City : ");
    const newUserNumber =  prompt("Enter Your Number : ");
    const newUserState =  prompt("Enter Your State : ");   
    employeeDetails.push({name:newUserName,id:newUserid,city:newUserCity,number:newUserNumber,state:newUserState});    
}

///////////////// Deleting Employee Details ////////////////////////////////
function deleteEmployee(){
    const namee = prompt("Enter a Name to delete  :");
    let check = 0;
    for(let i =0; i<employeeDetails.length; i++)
    {
        if(employeeDetails[i].name == namee)
        {
            employeeDetails.splice(i,1);
            check =1;
            break;
        }    
    }
    if(check == 0) console.log("Can`t Find User with this Name");
}

/////////////////////// DISPLAYING USER ////////////////////////////////////
function displayEmployee(){
    for(let i =0; i<employeeDetails.length; i++)
    {
       console.log("employee Number " + parseInt(i+1));
       console.log("Name :" + employeeDetails[i].name);
       console.log("Id :" +employeeDetails[i].id);
       console.log("City :" +employeeDetails[i].city);
       console.log("Number :" +employeeDetails[i].number);
       console.log("State :" +employeeDetails[i].state);
    }
}


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

