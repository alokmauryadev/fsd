class Camera{
    takePhoto(){
        console.log("Photo taken!")
    }

}
const c1 = new Camera();
const c2 = new Camera();
console.log(c1.__proto__)
console.log(c2)
class GPS{
    locate(){
        console.log("Location Found")
    }
}

class Battery{
    charge(){
        console.log("Charging")
    }
}

class SmartPhone{
    constructor(brand, name){
        this.brand = brand;
        this.name = name;
        this.camera = new Camera();
        this.battery = new Battery();
        this.gps = new GPS();
    }
}

const s1 = new SmartPhone("Realme","Narzo 50");
console.log(`${s1.name} from ${s1.brand} can do all these operations`)
s1.camera.takePhoto();
s1.battery.charge();
s1.gps.locate();
