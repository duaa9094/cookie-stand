'use strict'

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}



//seattle

const seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    workingHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am'],
    calculted: [],
    calculated2: [],
    generateRandomNumber: function () {
        
        let x = 0;
        for (let i = 0; i < this.workingHour.length; i++) {
            console.log('------' + i);
            x = getRandomIntInclusive(this.min, this.max);
            this.calculted.push(x);
            this.calculated2.push(Math.floor(x * this.avg));

        }
        console.log(this.calculted);
        console.log(this.calculated2);
    },

    doList: function () {
        let h2Node = document.createElement("h2");
        h2Node.textContent = 'seattle';

        let ulNode = document.createElement("UL");

        document.getElementById('mySales').appendChild(h2Node);
        document.getElementById('mySales').appendChild(ulNode);

        for (let i = 0; i < this.calculated2.length; i++) {
            let node = document.createElement("LI");                
            let textnode = document.createTextNode(this.workingHour[i]+': ' +this.calculated2[i]+' cookies');      
            node.appendChild(textnode);                           
            ulNode.appendChild(node);
    
        }

    }
}
seattle.generateRandomNumber();
seattle.doList();

//Tokyo

const tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    workingHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am'],
    calculted: [],
    calculated2: [],
    generateRandomNumber: function () {
        
        let x = 0;
        for (let i = 0; i < this.workingHour.length; i++) {
            console.log('------' + i);
            x = getRandomIntInclusive(this.min, this.max);
            this.calculted.push(x);
            this.calculated2.push(Math.floor(x * this.avg));

        }
        console.log(this.calculted);
        console.log(this.calculated2);
    },
 
    doList: function () {
        let h2Node = document.createElement("h2");
        h2Node.textContent = 'Tokyo';

        let ulNode = document.createElement("UL");

        document.getElementById('mySales').appendChild(h2Node);
        document.getElementById('mySales').appendChild(ulNode);

        for (let i = 0; i < this.calculated2.length; i++) {
            let node = document.createElement("LI");                 
            let textnode = document.createTextNode(this.workingHour[i]+': ' +this.calculated2[i]+' cookies');        
            node.appendChild(textnode);                             
            ulNode.appendChild(node);
    
        }

    }
}
tokyo.generateRandomNumber();
tokyo.doList();


//Dubai

const dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    workingHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am'],
    calculted: [],
    calculated2: [],
    generateRandomNumber: function () {
        
        let x = 0;
        for (let i = 0; i < this.workingHour.length; i++) {
            console.log('------' + i);
            x = getRandomIntInclusive(this.min, this.max);
            this.calculted.push(x);
            this.calculated2.push(Math.floor(x * this.avg));

        }
        console.log(this.calculted);
        console.log(this.calculated2);
    },
 
    doList: function () {
        let h2Node = document.createElement("h2");
        h2Node.textContent = 'Dubai';

        let ulNode = document.createElement("UL");

        document.getElementById('mySales').appendChild(h2Node);
        document.getElementById('mySales').appendChild(ulNode);

        for (let i = 0; i < this.calculated2.length; i++) {
            let node = document.createElement("LI");                 
            let textnode = document.createTextNode(this.workingHour[i]+': ' +this.calculated2[i]+' cookies');        
            node.appendChild(textnode);                             
            ulNode.appendChild(node);
    
        }

    }
}
dubai.generateRandomNumber();
dubai.doList();



//Paris

const paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    workingHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am'],
    calculted: [],
    calculated2: [],
    generateRandomNumber: function () {
      
        let x = 0;
        for (let i = 0; i < this.workingHour.length; i++) {
            console.log('------' + i);
            x = getRandomIntInclusive(this.min, this.max);
            this.calculted.push(x);
            this.calculated2.push(Math.floor(x * this.avg));

        }
        console.log(this.calculted);
        console.log(this.calculated2);
    },
 
    doList: function () {
        let h2Node = document.createElement("h2");
        h2Node.textContent = 'Paris';

        let ulNode = document.createElement("UL");

        document.getElementById('mySales').appendChild(h2Node);
        document.getElementById('mySales').appendChild(ulNode);

        for (let i = 0; i < this.calculated2.length; i++) {
            let node = document.createElement("LI");                 
            let textnode = document.createTextNode(this.workingHour[i]+': ' +this.calculated2[i]+' cookies');        
            node.appendChild(textnode);                             
            ulNode.appendChild(node);
    
        }

    }
}
paris.generateRandomNumber();
paris.doList();



//Lima

const lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    workingHour: ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1am', '2am', '3am', '4am', '5am', '6am', '7am'],
    calculted: [],
    calculated2: [],
    generateRandomNumber: function () {
       
        let x = 0;
        for (let i = 0; i < this.workingHour.length; i++) {
            console.log('------' + i);
            x = getRandomIntInclusive(this.min, this.max);
            this.calculted.push(x);
            this.calculated2.push(Math.floor(x * this.avg));

        }
        console.log(this.calculted);
        console.log(this.calculated2);
    },
 
    doList: function () {
        let h2Node = document.createElement("h2");
        h2Node.textContent = 'Lima';

        let ulNode = document.createElement("UL");

        document.getElementById('mySales').appendChild(h2Node);
        document.getElementById('mySales').appendChild(ulNode);

        for (let i = 0; i < this.calculated2.length; i++) {
            let node = document.createElement("LI");                 
            let textnode = document.createTextNode(this.workingHour[i]+': ' +this.calculated2[i]+' cookies');        
            node.appendChild(textnode);                             
            ulNode.appendChild(node);
    
        }

    }
}
lima.generateRandomNumber();
lima.doList();
