class Address{
    constructor(city,country){
        this.city = city;
        this.country = country;
    }
}

class User{
    constructor(name,age, city, country){
        this.name = name;
        this.age = age;
        this.address = new Address(city, country)
    }
}

const u1 = new User("Govind",22,"gurgaon","India")
console.log(u1)