// compulsory Task 1
// Capstone III
/* In this capstone project I will be creating a script thats manages different kinds of employees in a sales department.
My script will demonstrate how different employees will recieve their pay each month.*/

/* The three types of employees we will be looking at are hourly employees,hybrid employees and salaried employees.
So first we will create a general class that they will inherit from.*/

class Employee {
  constructor(name, age, salesTarget) {
    this.name = name;
    this.age = age;
    this.salesTarget = salesTarget;
  }
}
// Our first class to inherit from the general class will be the salaried Employee//
/* However we will be adding 2 new parameters to it basicSalary & Salx10.We will also be
adding the methods to calculate there pay add the end of the month*/

class Salaried extends Employee {
  constructor(name, age, salesTarget, basicSalary, salX10) {
    super(name, age, salesTarget);
    this.basicSalary = basicSalary;
    this.salX10 = salX10;
  }
  // so first I will create method to return the basic salary of an employees
  // Then if the employee exceeds there sales targets they will get a bonus of 10% so I will create function to implement that.

  get getbasicSalary() {
    console.log(
      this.name +
        `: Salaried Employee\n Salary :R${this.basicSalary} \n Payment Method: Monthly Salary`
    );
  }
  get getsalX10() {
    let bonus = this.basicSalary * this.salX10 + this.basicSalary;

    console.log(
      this.name +
        `: Salaried Employee\n Salary :R${bonus}\n Payment Method: Monthly Salary + 10% for exceeding sales target`
    );
  }
}
// Our second class to inherit from the general class will be the hourly Employee//
/* However we will be adding 3 new parameters to it hourpay , hoursworked ,rateX50.We will also be
adding the methods to calculate there pay add the end of the month*/

class Hourly extends Employee {
  constructor(name, age, salesTarget, hourPay, hoursWorked, rateX50) {
    super(name, age, salesTarget);
    this.hourPay = hourPay;
    this.rateX50 = rateX50;
    this.hoursWorked = hoursWorked;
  }
  /* So first I will create a method to calculate pay for one of the hourly employees by multiplying
  the hour rate and the hours they work in a day. Then jones has exceeded his sales target so
   he is entitled to a bonus for the second method I use the same method but
  I add the 50% to the equation.*/

  get gethourpay() {
    let workDay = this.hourPay * this.hoursWorked;
    console.log(
      this.name +
        `: Hourly Employee\n Salary :R${workDay}\n Payment Method: Hourly Rate x Hours worked`
    );
  }
  get getrateX50() {
    let bonusRate = this.hourPay * this.hoursWorked * this.rateX50;
    let workDayX50 = this.hourPay * this.hoursWorked + bonusRate;
    console.log(
      this.name +
        `: Hourly Employee\n Salary :R${workDayX50}\n Payment Method: Hourly Rate x Hours worked + 50% if Sales target is exceeded`
    );
  }
}
// Our third class to inherit from the general class will be the salaried Employee//
/* However we will be adding 4 new parameters to it hourlyRate, extraHours, basicSalary & Salx10.We will also be
adding the methods to calculate there pay add the end of the month*/

class Hybrid extends Employee {
  constructor(
    name,
    age,
    salesTarget,
    basicSalary,
    hourlyRate,
    extraHours,
    salx20
  ) {
    super(name, age, salesTarget);
    this.basicSalary = basicSalary;
    this.salx20 = salx20;
    this.hourlyRate = hourlyRate;
    this.extraHours = extraHours;
  }
  /* So our first hybird employee Bilal has just earned his basic so we will create a method that returns the
basic salary he has earned. However the second employee Ali has work additional hours and execeeded his sale target 
so we will create a method to return his pay with his extra hour pay by multiplying both the hour rate and extra hours worked.
Then we add the 20% increase he received from exceeding his sales target */

  get getbasicSalary() {
    console.log(
      this.name +
        `: Hybrid Employee\n Salary :R${this.basicSalary}\n Payment Method: Monthly Salary`
    );
  }
  get getextraHours() {
    let bonus = this.hourlyRate * this.extraHours * this.salx20;
    let pay = this.basicSalary + this.hourlyRate * this.extraHours + bonus;

    console.log(
      this.name +
        `: Hybrid Employee\n Salary :R${pay}\n Payment Method: Monthly Salary + Additional hours worked + 20% for Sales Target exceeded `
    );
  }
}
// below we create the instances for each class//

const bob = new Salaried("Bob", 24, 1000, 500, 0.1);
const blob = new Salaried("Blob", 28, 3000, 1000, 0.1);

const john = new Hourly("John", 21, 150, 15, 8, 0.5);
const jones = new Hourly("Jones", 25, 220, 30, 8, 0.5);

const bilal = new Hybrid("Bilal", 32, 4000, 3000, 20, 4, 0.2);
const ali = new Hybrid("Ali", 26, 1000, 1500, 20, 4, 0.2);

/* our first salaried employee output will be bob who that just earned his basic for the month.
The second salaried work blob has sold more then his sales target so he gets an increase of 10% added to his pay*/
console.log(bob.getbasicSalary);
console.log(blob.getsalX10);

/* our first hourly employee john has not made his sale target so he dosent not get a bonus his
output will be the hourly rate * the hours he worked. Jones however has a 50% bonus added to his pay    */

console.log(john.gethourpay);
console.log(jones.getrateX50);

/* Our first Hybrid Employee Bilal has no extra hours worked and he has no reached his sales target therefore he
will only output his basic. our second employee ali has both worked extra hours and reached his sales target therefore he gets
a 20% bonus on top of his additional hours he worked.*/

console.log(bilal.getbasicSalary);
console.log(ali.getextraHours);
