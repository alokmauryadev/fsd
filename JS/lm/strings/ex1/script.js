//below function works if there is one word in the name
let user_name = prompt("Enter Your name");
const formattedName = function(){
    return user_name[0].toUpperCase() + user_name.slice(1).toLowerCase()
};
let len = user_name.split(' ').length;
createWelcomeMessage(user_name);
function createWelcomeMessage(name){
    if(typeof name !== "string" || name===""){
        window.alert("Please enter correct name")
    }
    else if(len === 1){
        console.log(`Welcome, ${formattedName()}`)
            console.log(user_name.split(' ').length);
    }
    else{
        let formattedWord = "";
        for (let i = 0; i < len; i++) {
            let element = user_name.split(' ')[i];
            let words = `${element[0].toUpperCase() + element.slice(1).toLowerCase() + ' '}`;
            formattedWord += words;
        }
            console.log(`Welcome, ${formattedWord}`)
    }
}  


