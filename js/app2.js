'use strict'
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


const workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']

const seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    randomCustomerPerHour: [],

    getRandomCustomerPerHour: function () {
     
     for(let i=0;i<workingHours.length;i++){
        this.randomCustomerPerHour.push(getRandomInt(this.min, this.max));
     }
        
    }

}
console.log(seattle.getRandomCustomerPerHour());
console.log(seattle.randomCustomerPerHour);