class Wagon{
    constructor(capacity){
        this.capacity=capacity
        this.passengers=[]
    }

getAvailableSeatCount(){

 return this.capacity-this.passengers.length
}


join(traveler){
if(this.getAvailableSeatCount()>0){
this.passengers.push(traveler)
}
}


shouldQuarantine(){
 return this.passengers.some(traveler=>traveler.isHealthy===false)
 

}



totalFood(){
 return this.passengers.reduce((totalAmountOfFood,sharedAmongPassengers)=>totalAmountOfFood+sharedAmongPassengers.food,0)
}




}