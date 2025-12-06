class Vehicle{
    plateNumber;
    #chasisNumber;

    constructor(plateNumber,chasisNumber){
        this.plateNumber = plateNumber;
        this.#chasisNumber = chasisNumber;
    }
    getChasisNumber(){
        return this.#chasisNumber
    }

}
class twowheeler extends Vehicle{
    constructor(helmet){
        super();
        this.isHelmet = helmet;
    }
}

class fourWheeler extends Vehicle{
    noofAirbags;
    constructor(plateNumber,chasisNumber,airbags){
        super(plateNumber,chasisNumber)
        this.noofAirbags = airbags;
    }
}

const creta = new fourWheeler("abcd","MAFSDAS220322","4")
console.log(creta.getChasisNumber())
// class ElectricCar extends fourWheeler{
//     chargingCapacity;
//     constructor(chargingCapacity){
//         this.chargingCapacity = chargingCapacity;
//     }
// }