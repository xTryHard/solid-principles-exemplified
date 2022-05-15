/*
The 'S' in SOLID makes reference to the Single Responsibility Principle. As per Uncle Bob, it is 
described as follows:

"A module should have one, and only one, reason to change".

Being more explicit and in terms of OOP, when we build a class, all the methods within it should serve a specific and unique functionality. This translantes into less coupled and more organized code, for we split the entities within the domain based on "the social structure of the users using it".

Now, let's see an example.
*/

/*
Imagine we have a robot chef that is able to cook 3 main dishes: Pizza, Pasta and Risotto. 

The way the robot chef cooks these dishes depends on the country setting that is configured (different ingredients are used for the same dish)

*/

class RobotChef {
  country: string;

  constructor(country: string) {
    this.country = country;
  }

  cookPizza() {
    if (this.country == "ITALY") {
      //Cook with italian ingredients
    }
    //'n' ifs, where 'n' is the number of available countries.
  }

  cookPasta() {
    if (this.country == "GREECE") {
      //Cook with italian ingredients
    }
    //'n' ifs, where 'n' is the number of available countries.
  }

  cookRisotto() {
    if (this.country == "SPAIN") {
      //Cook with italian ingredients
    }
    //'n' ifs, where 'n' is the number of available countries.
  }
}

/*
Did you see the issue with the previous example?

Besides the ridiculous potential amount of 'ifs' for each dish's recipe, this  
*/
