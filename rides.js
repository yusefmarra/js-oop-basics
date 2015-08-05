var Ride = function(min, max) {
  this.minHeight = min
  this.maxHeight = max
}

var Child = function(height, name, age) {
  this.height = height
  this.name = name
  this.age = age
}

Ride.prototype.canRide = function(child) {
  if (child.height < this.minHeight){
    return false;
  } else {
    return true;
  }
}

var kid = new Child(4, 'Bob', 12)
var ride = new Ride(5,9)

console.log(ride.canRide(kid));
