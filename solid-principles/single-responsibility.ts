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

Besides the ridiculous potential amount of 'ifs' for each dish's recipe, this class has multiple reasons to change: whatever ingredient that changes or is added to a contry's recipe, or if a dish is not available for a country anymore, or if a new dish is added, are only three examples.

But, how can we fix this? 

Let's translate this class into multiple modules that respect SRP (SPLIT!)
*/

/*First, we create an interface (could also work with an abstract class) that contains the to-implement methods of the dishes. This will only change when we want to update the available dishes within the robot*/
interface IRobotChef {
  cookPizza(): any;
  cookPasta(): any;
  cookRisotto(): any;
}

/*Now, we would need to create on-demand classes that implement this interface, based on the countries considered for the robot chef. In this way, each implementation will change based on its own requirements (updating the ingredients of the dish, for example) without interfeering with the others*/

/*Let's implement IRobotChef!*/
class ItalianRobotChef implements IRobotChef {
  cookPizza() {
    console.log("Pizza Dough + Tomato Sauce + Mozzarella Cheese + Pesto");
  }
  cookPasta() {
    console.log(
      "Pasta + Kalamata olives + Garlic + Extra virgin olive oil + Parmesan cheese"
    );
  }
  cookRisotto() {
    console.log(
      "Arborio rice + Chicken broth + Chopped onion + White wine + Lemon juice + Parmesa cheese + Chopped basil"
    );
  }
}
