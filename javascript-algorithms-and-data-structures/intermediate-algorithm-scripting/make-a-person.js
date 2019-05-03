// MAKE A PERSON
/* Fill in the object constructor with the following methods below:

getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object. */
var Person = function(firstAndLast) {
  let first = firstAndLast.split(' ')[0];
  let last = firstAndLast.split(' ')[1];

  this.getFirstName = function() {
    return first;
  }
  this.getLastName = function() {
    return last;
  }
  this.getFullName = function() {
    return `${first} ${last}`;
  }
  this.setFirstName = function(input) {
    if (typeof input !== 'string')
      throw new Error('please enter a string')
    first = input;
  }
  this.setLastName = function(input) {
    if (typeof input !== 'string')
      throw new Error('please enter a string')
    last = input;
  }
  this.setFullName = function(input) {
    if (typeof input !== 'string')
      throw new Error('please enter a string')
    first = input.split(' ')[0];
    last = input.split(' ')[1];
  }
}

var bob = new Person('Bob Ross');
console.log(bob.getFullName());