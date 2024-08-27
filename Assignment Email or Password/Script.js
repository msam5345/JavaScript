
   let gmail = prompt("Enter Your Gmail:");

    let password = prompt("Enter Your Password:");


    if (gmail === "user@gmail.com" && password === "password123") 
        {
        console.log("Login Successful!")
        alert("Login Successful!")
    } 
    else if (gmail === "null" && password === "null") {
        alert("Both Gmail and Password Are Required.")
        console.log("Both Gmail and Password Are Required.")
    }
   else if (gmail === 'null' && password === "password123")
    {
        alert ("Invalid Gmail.")
        console.log("Invalid Gmail.")
    }

    else if (gmail === "user@gmail.com" && password === "null")
    {
        alert("Invalid Password.")
        console.log("Invalid Password.")
    }

else
{
    alert("Invalid Gmail Or Password.")
    console.log("Invalid Gmail Or Password.")
}