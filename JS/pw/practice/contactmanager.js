let contacts = [];


function addContact(name, phone) {
    const contact = {name, phone};
    contacts.push(contact);
}
function deleteContact(name) {
    const index = contacts.findIndex(contact => contact.name === name);
    if (index !== -1) {
        contacts.splice(index, 1);
    }
    else{
        return "No Contact Found"
    }
}

function displayContacts(){
    contacts.forEach(contact=>console.log(`Contact No. of ${contact.name} is ${contact.phone}`))
}
function addMultipleContacts(...contact){
    contacts.push(...contact)
}

function findContact(name){
  return contacts.find((v)=>v.name===name) ?? null
}
addMultipleContacts({name:"supriya",phone:"+9185008008"},{name:"asdfd",phone:"+ssdfds855"})
addContact("Alok", "+918601435211");
// addContact("Alka", "+91858587858");

// deleteContact("Alok")
displayContacts();
console.log(findContact("Aloks"))

// console.log(contacts);

