class User{
    constructor(email,password){
        this.email = email
        this.password = password;
    }
    login(email,password){
        let isCorrect = checkPassword(this.email,password);
        return isCorrect;
    }
    #checkPassword(email,password){
        
    }
}
