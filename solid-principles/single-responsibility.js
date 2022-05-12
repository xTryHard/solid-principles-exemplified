/*
The 'S' in SOLID makes reference to the Single Responsibility Principle. As per Uncle Bob, it is 
described as follows:

"A module should have one, and only one, reason to change".

This translantes into less coupled and more organized code, for we split the entities within the domain based on "the social structure of the users using it".

Now, let's see an example of a violation to this principle.
*/

class Robot {

  cook() {
    //Code of chef robot
  }

  garden() {
    //Code of gardener robot
  }

  paint() {
    //Code of painter robot
  }

  drive() {
    //Code of driver robot
  }

}