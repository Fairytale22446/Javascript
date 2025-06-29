let userName = ["Mahad","Zeeshan","Admin","Usman"]
userName.forEach(userName => 
{
    if(userName === "Admin"){
        console.log(`hello ${userName} !!! would you like to see a status report`);
    }else{
        console.log(`hello ${userName} !!! thankyou for logging in again`);
    }
}
)