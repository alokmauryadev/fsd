class Notification{
    send(){
        console.log("General Send Function")
    }
}
class Email extends Notification{
    send(){
        console.log("Sending Email")
    }
}
class SMS extends Notification{
    send(){
        console.log("Sending SMS")
    }
}
class Whatsapp extends Notification{
    // send(){
    //     console.log("Sending sms message")
    // }

}
const email1 = new Email();
email1.send();
const sms1 = new SMS();
sms1.send();

const what1 = new Whatsapp();
what1.send()