// function car (name,modal,color){
//     return {
//         name : name,
//         modal : modal,
//         color : color,
//         start : function(){
//             console.log("start engine " + this.name)
//         }
//     };
// }

// const lancer = car("matshupic","lancer","black")
// console.log(lancer)
// console.log(lancer.name)
// lancer.start()

function Car (name,modal,color){
    this.name = name;
    this.modal = modal;
    this.color = color;
}

Car.prototype.start = function (){
    console.log("start engine " + this.name)
}

Car.prototype.stop = function () {
    console.log("stop engine " + this.name)
}

let verna =  new Car("hyndia","verna","white")
console.log( verna )

// verna.start();
// verna.stop();

// prototype inhertinc

function Lancer(name,model,color,maxSpeed){
    this.name = name,
    this.model = model,
    this.color = color,
    this.maxSpeed = maxSpeed
}

// Lancer.prototype = Object.create(Car.prototype);
// Lancer.prototype.constructor = Lancer

function inherts(child , parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

inherts(Lancer , Car)

const merage = new Lancer('merage',2020,'red',180);

console.log(merage)



