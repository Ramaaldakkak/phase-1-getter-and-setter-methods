// Add your Circle class here


// For reference, here are the formulas for calculating diameter, circumference and area:

// Diameter = radius • 2
// Circumference = π • diameter
// Area = π • radius2

// First, let's create a class of Circle

const pi = Math.PI
class Circle {
  constructor(radius) {
    this.radius = radius
  }

// Circle will accept 1 parameter, radius, and use this.radius to store the value
  get area() {
    return Math.PI * this.radius * this.radius
  }

  set area(area) {
    this.radius = Math.sqrt(area / Math.PI)
  }

// Use Math.PI to get an accurate measurement of pi (Links to an external site.) (π)
  get circumference() {
    return 2 * Math.PI * this.radius
  }

  set circumference(circumference) {
    this.radius = circumference / (2 * Math.PI)
  }



  // Define getter methods for diameter, circumference, and area which will calculate each value using this.radius and pi
    get diameter() {
      return 2 * this.radius
    }

    // Define setter methods for diameter, circumference, and area which will accept values for each calculation, calculate the radius based on the input value and set this.radius accordingly
    set diameter(diameter) {
      this.radius = diameter / 2
    }
}