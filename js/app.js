'use strict'

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Location(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.calculted = [];
    this.calculated2 = [];
    this.total = 0;

}



Location.prototype.generateRandomNumber = function () {

    let x = 0;
    for (let i = 0; i < workingHours.length; i++) {

        x = getRandomIntInclusive(this.min, this.max);
        this.calculted.push(x);
        this.calculated2.push(Math.floor(x * this.avg));

    }

}

Location.prototype.render = function () {

    let tr = document.createElement('tr');
    tr.setAttribute("class", "hover");
    table.appendChild(tr);
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.name;

    for (let i = 0; i < this.calculated2.length; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        td.textContent = this.calculated2[i];
    }

    let total = 0
    for (let i = 0; i < this.calculated2.length; i++) {
        total = total + this.calculated2[i];
    }
    this.total = total;
    console.log(this.total);

    let tdtotal = document.createElement('td');
    tr.appendChild(tdtotal);
    tdtotal.textContent = total;


}


let seattle = new Location('Seattle', 23, 65, 6.3);
let tokyo = new Location('Tokyo', 3, 24, 1.2);
let dubai = new Location('Dubai', 11, 38, 3.7);
let paris = new Location('Paris', 20, 38, 2.3);
let lima = new Location('Lima', 2, 16, 4.6);



seattle.generateRandomNumber();
// console.log(seattle.calculated2);
// seattle.doList();


tokyo.generateRandomNumber();
// tokyo.doList();

dubai.generateRandomNumber();
// dubai.doList();

paris.generateRandomNumber();
// paris.doList();

lima.generateRandomNumber();
// lima.doList();


let container = document.getElementById('mySales');
let table = document.createElement('table');
container.appendChild(table);
table.setAttribute('id', 'myTable');
let tr = document.createElement('tr');
table.appendChild(tr);
let th = document.createElement('th');
tr.appendChild(th);
th.textContent = ' ';

for (let i = 0; i < workingHours.length; i++) {
    let th = document.createElement('th');
    tr.appendChild(th);
    th.textContent = workingHours[i];
}

let thtotal = document.createElement('th');
tr.appendChild(thtotal);
thtotal.textContent = 'Daily Location Total';



seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();

/////////////// total 
let trtotal = document.createElement('tr');
table.appendChild(trtotal);
let thtotal1 = document.createElement('th');
trtotal.appendChild(thtotal1);
thtotal1.textContent = 'Total';



let grandTotals = [];

let grandtotal = 0

for (let i = 0; i < seattle.calculated2.length; i++) {


    grandtotal = seattle.calculated2[i] + tokyo.calculated2[i] + dubai.calculated2[i] + paris.calculated2[i] + lima.calculated2[i];

    grandTotals.push(grandtotal);

    let thtotal1 = document.createElement('th');
    trtotal.appendChild(thtotal1);

    thtotal1.textContent = grandtotal;

}


let finalTotal = seattle.total + tokyo.total + dubai.total + paris.total + lima.total;

let thtotal2 = document.createElement('th');
trtotal.appendChild(thtotal2);

thtotal2.textContent = finalTotal;



/////////////////////////////////////////////////////////////////Form 
const form = document.getElementById('locationForm');
form.addEventListener('submit', handleEvent);

function handleEvent(event) {
    event.preventDefault();
    let location = event.target.location.value;
    let min = event.target.min.value;
    min = parseInt(min);
    let max = event.target.max.value;
    max = parseInt(max);
    let avg = event.target.avg.value;
    avg = parseInt(avg);

    deletLastRaw();


    let newLocation = new Location(location, min, max, avg);
    console.log(newLocation);
    newLocation.generateRandomNumber();
    newLocation.render();


    renderTotalFooter(newLocation);

}

function deletLastRaw() {
    document.getElementById("myTable").deleteRow(-1);
}



function renderTotalFooter(newLocation) {
    let trtotal = document.createElement('tr');
    table.appendChild(trtotal);
    let thtotal1 = document.createElement('th');
    trtotal.appendChild(thtotal1);
    thtotal1.textContent = 'Total';

    let grandtotal = 0

    for (let i = 0; i < seattle.calculated2.length; i++) {
    
    
        grandtotal = grandTotals[i] + newLocation.calculated2[i];
    
        let thtotal1 = document.createElement('th');
        trtotal.appendChild(thtotal1);
    
        thtotal1.textContent = grandtotal;
    
    }
    
    
    finalTotal = finalTotal+newLocation.total;// seattle.total + tokyo.total + dubai.total + paris.total + lima.total;
    
    let thtotal2 = document.createElement('th');
    trtotal.appendChild(thtotal2);
    
    thtotal2.textContent = finalTotal;






}

















// Location.prototype.doList = function () {

//     let h2Node = document.createElement("h2");
//     h2Node.textContent = this.name;

//     let ulNode = document.createElement("UL");

//     document.getElementById('mySales').appendChild(h2Node);
//     document.getElementById('mySales').appendChild(ulNode);

//     for (let i = 0; i < this.calculated2.length; i++) {
//         let node = document.createElement("LI");
//         let textnode = document.createTextNode(workingHours[i] + ': ' + this.calculated2[i] + ' cookies');
//         node.appendChild(textnode);
//         ulNode.appendChild(node);

//     }
//     let total = 0
//     for (let i = 0; i < this.calculated2.length; i++) {
//         total = total + this.calculated2[i];
//     }

//     let node = document.createElement("LI");
//     node.textContent = 'Total : ' + total + ' cookies';
//     ulNode.appendChild(node);

// }




// //seattle
// const seattle = {
//     min: 23,
//     max: 65,
//     avg: 6.3,
//     workingHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am'],
//     calculted: [],
//     calculated2: [],
//     generateRandomNumber: function () {

//         let x = 0;
//         for (let i = 0; i < this.workingHour.length; i++) {

//             x = getRandomIntInclusive(this.min, this.max);
//             this.calculted.push(x);
//             this.calculated2.push(Math.floor(x * this.avg));

//         }
//         // console.log(this.calculted);
//         // console.log(this.calculated2);
//     },

//     doList: function () {
//         let h2Node = document.createElement("h2");
//         h2Node.textContent = 'seattle';

//         let ulNode = document.createElement("UL");

//         document.getElementById('mySales').appendChild(h2Node);
//         document.getElementById('mySales').appendChild(ulNode);

//         for (let i = 0; i < this.calculated2.length; i++) {
//             let node = document.createElement("LI");                
//             let textnode = document.createTextNode(this.workingHour[i]+': ' +this.calculated2[i]+' cookies');      
//             node.appendChild(textnode);                           
//             ulNode.appendChild(node);

//         }

//         let total=0
//         for(let i=0;i<this.calculated2.length;i++){
//             total=total+this.calculated2[i];
//         }

//         let node = document.createElement("LI");                
//         node.textContent = 'Total : '+ total+' cookies' ;                          
//         ulNode.appendChild(node);



//     }
// }

// seattle.generateRandomNumber();
// seattle.doList();

// //Tokyo

// const tokyo = {
//     min: 3,
//     max: 24,
//     avg: 1.2,
//     workingHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am'],
//     calculted: [],
//     calculated2: [],
//     generateRandomNumber: function () {

//         let x = 0;
//         for (let i = 0; i < this.workingHour.length; i++) {

//             x = getRandomIntInclusive(this.min, this.max);
//             this.calculted.push(x);
//             this.calculated2.push(Math.floor(x * this.avg));

//         }
//         // console.log(this.calculted);
//         // console.log(this.calculated2);
//     },

//     doList: function () {
//         let h2Node = document.createElement("h2");
//         h2Node.textContent = 'Tokyo';

//         let ulNode = document.createElement("UL");

//         document.getElementById('mySales').appendChild(h2Node);
//         document.getElementById('mySales').appendChild(ulNode);

//         for (let i = 0; i < this.calculated2.length; i++) {
//             let node = document.createElement("LI");                 
//             let textnode = document.createTextNode(this.workingHour[i]+': ' +this.calculated2[i]+' cookies');        
//             node.appendChild(textnode);                             
//             ulNode.appendChild(node);

//         }
//         let total=0
//         for(let i=0;i<this.calculated2.length;i++){
//             total=total+this.calculated2[i];
//         }

//         let node = document.createElement("LI");                
//         node.textContent = 'Total : '+ total+' cookies' ;                          
//         ulNode.appendChild(node);


//     }
// }
// tokyo.generateRandomNumber();
// tokyo.doList();


// //Dubai

// const dubai = {
//     min: 11,
//     max: 38,
//     avg: 3.7,
//     workingHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am'],
//     calculted: [],
//     calculated2: [],
//     generateRandomNumber: function () {

//         let x = 0;
//         for (let i = 0; i < this.workingHour.length; i++) {
//             x = getRandomIntInclusive(this.min, this.max);
//             this.calculted.push(x);
//             this.calculated2.push(Math.floor(x * this.avg));

//         }
//         // console.log(this.calculted);
//         // console.log(this.calculated2);
//     },

//     doList: function () {
//         let h2Node = document.createElement("h2");
//         h2Node.textContent = 'Dubai';

//         let ulNode = document.createElement("UL");

//         document.getElementById('mySales').appendChild(h2Node);
//         document.getElementById('mySales').appendChild(ulNode);

//         for (let i = 0; i < this.calculated2.length; i++) {
//             let node = document.createElement("LI");                 
//             let textnode = document.createTextNode(this.workingHour[i]+': ' +this.calculated2[i]+' cookies');        
//             node.appendChild(textnode);                             
//             ulNode.appendChild(node);

//         }
//         let total=0
//         for(let i=0;i<this.calculated2.length;i++){
//             total=total+this.calculated2[i];
//         }

//         let node = document.createElement("LI");                
//         node.textContent = 'Total : '+ total+' cookies' ;                          
//         ulNode.appendChild(node);

//     }
// }
// dubai.generateRandomNumber();
// dubai.doList();



// //Paris

// const paris = {
//     min: 20,
//     max: 38,
//     avg: 2.3,
//     workingHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am'],
//     calculted: [],
//     calculated2: [],
//     generateRandomNumber: function () {

//         let x = 0;
//         for (let i = 0; i < this.workingHour.length; i++) {
//             x = getRandomIntInclusive(this.min, this.max);
//             this.calculted.push(x);
//             this.calculated2.push(Math.floor(x * this.avg));

//         }
//         // console.log(this.calculted);
//         // console.log(this.calculated2);
//     },

//     doList: function () {
//         let h2Node = document.createElement("h2");
//         h2Node.textContent = 'Paris';

//         let ulNode = document.createElement("UL");

//         document.getElementById('mySales').appendChild(h2Node);
//         document.getElementById('mySales').appendChild(ulNode);

//         for (let i = 0; i < this.calculated2.length; i++) {
//             let node = document.createElement("LI");                 
//             let textnode = document.createTextNode(this.workingHour[i]+': ' +this.calculated2[i]+' cookies');        
//             node.appendChild(textnode);                             
//             ulNode.appendChild(node);

//         }
//         let total=0
//         for(let i=0;i<this.calculated2.length;i++){
//             total=total+this.calculated2[i];
//         }

//         let node = document.createElement("LI");                
//         node.textContent = 'Total : '+ total+' cookies' ;                          
//         ulNode.appendChild(node);

//     }
// }
// paris.generateRandomNumber();
// paris.doList();



// //Lima

// const lima = {
//     min: 2,
//     max: 16,
//     avg: 4.6,
//     workingHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am'],
//     calculted: [],
//     calculated2: [],
//     generateRandomNumber: function () {

//         let x = 0;
//         for (let i = 0; i < this.workingHour.length; i++) {

//             x = getRandomIntInclusive(this.min, this.max);
//             this.calculted.push(x);
//             this.calculated2.push(Math.floor(x * this.avg));

//         }
//         // console.log(this.calculted);
//         // console.log(this.calculated2);
//     },

//     doList: function () {
//         let h2Node = document.createElement("h2");
//         h2Node.textContent = 'Lima';

//         let ulNode = document.createElement("UL");

//         document.getElementById('mySales').appendChild(h2Node);
//         document.getElementById('mySales').appendChild(ulNode);

//         for (let i = 0; i < this.calculated2.length; i++) {
//             let node = document.createElement("LI");                 
//             let textnode = document.createTextNode(this.workingHour[i]+': ' +this.calculated2[i]+' cookies');        
//             node.appendChild(textnode);                             
//             ulNode.appendChild(node);

//         }
//         let total=0
//         for(let i=0;i<this.calculated2.length;i++){
//             total=total+this.calculated2[i];
//         }

//         let node = document.createElement("LI");                
//         node.textContent = 'Total : '+ total+' cookies' ;                          
//         ulNode.appendChild(node);

//     }
// }
// lima.generateRandomNumber();
// lima.doList();
