let userName = ["Mahad","Ali","Zeeshan","Admin","Usman"]
userName = []
if(userName.length === 0){
    console.log("your array in empty we need to find some user")
}
else{
    userName.forEach(userName => 
        {
            if(userName === "Admin"){
                console.log(`hello ${userName} !!! would you like to see a status report`);
            }else{
                console.log(`hello ${userName} !!! thankyou for logging in again`);
            }
        }
        )
}