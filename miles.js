var Car = function(mpg, tankSize) {
  this.mpg = mpg
  this.tankSize = tankSize
}

// Create a Route class that takes the total miles to the destination, the destination name, and location (city and state).

var Route = function(miles, destName, location) {
  this.miles = miles
  this.destName = destName
  this.location = location
}

Car.prototype.enoughGas = function(route) {
  if (route.miles > this.mpg*this.tankSize) {
    return false;
  } else {
    return true;
  }
}

var boulder = new Route(30, 'Boulder', 'Boulder, CO');
var myCar = new Car(18, 30);

console.log(myCar.enoughGas(boulder));
