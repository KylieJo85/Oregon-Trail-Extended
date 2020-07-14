//Thank you to Doug, Cynthia, Lesa, and Colin for reminding me to have two separate files for each class (travelers and wagons.)

class Traveler{
    constructor(name){
    this.name=name
    this.food=1
    this.isHealthy=true
    }


hunt() {
    this.food+=2
    
    
}

eat() {
    
    if(this.food>0){
       this.food-=1
     
    }
    else{
        this.isHealthy=false
    }
   

}
}

class Doctor extends Traveler{
    constructor(){

    }
}