let current_user = ["osman","ali","areeba","zain","osama"]
let new_user = ["hamza","ayesha","ali","mahad","areeba"]
new_user.forEach(new_user =>{
    let  ourCondition = current_user.some(current_user => current_user.toLowerCase() === new_user.toLowerCase())
    if(ourCondition){
        console.log(`sorry ${new_user} !!! is already taken.`)
    }
    else{
        console.log(`this username ${new_user} is available.`)
    }
})