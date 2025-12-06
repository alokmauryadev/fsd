class NotificationInterface{
    send(message){
        throw "Must be implemented"
    }
}
class EmailNotfication extends NotificationInterface{
    send(message){
        console.log("Email Sent:", message)
    }
}

class SMSNotification extends NotificationInterface{
    send(message){
        console.log("SMS Send:", message)
    }
}

let email = new EmailNotfication()
email.send("email message");
let sms = new SMSNotification();
sms.send("sms message")