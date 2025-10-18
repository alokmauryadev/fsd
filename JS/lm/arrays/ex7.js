const users = [
  { id: 1, name: 'Alice', role: 'admin' },
  { id: 2, name: 'Bob', role: 'user' },
  { id: 3, name: 'Charlie', role: 'admin' },
  { id: 4, name: 'David', role: 'user' }
];

let getAdminNames=(usersArray)=>{
    let onlyAdmin = usersArray.filter(v=>v.role=="admin")
    let capital = onlyAdmin.map((v=>v.name.toUpperCase()))
    console.log(capital)
}

getAdminNames(users);