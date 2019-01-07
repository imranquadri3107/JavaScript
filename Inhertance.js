// Prototypeal Inheritance.
// Every object has a property called prototype where you can add methods and properties to it. When you create other objects from this object the newly created object will automatically inherit the property of the parent.

let car = function(model){
  this.model = model;
};

car.prototype.getModel = function(){
  return this.model;
}

let toyota = new car('Toyota');
console.log(toyota.getModel());

let nissan = new car('Nissan');
console.log(nissan.getModel());
