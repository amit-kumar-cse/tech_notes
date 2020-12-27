//with types
{
  type Employee = {
    name: string;
    startDate: Date;
  };

  type Admin = {
    name: string;
    privileges: String[];
  };

  type ElevatedEmployee = Employee | Admin;

  let amit: ElevatedEmployee;
  amit = {
    name: "amit",
    privileges: ["create-server"],
    startDate: new Date(),
  };

  type AmitEmployee = Admin & Employee;
  let amitEmployee: AmitEmployee = {
    name: "Amit",
    startDate: new Date(),
    privileges: ["create-server"],
  };

  console.log(amitEmployee.name);
  console.log(amitEmployee.startDate);
  console.log(amitEmployee.privileges);
}

{
  type Combinable = number | string;
  type Numeric = number | boolean;

  type Universal = Combinable & Numeric;

  let x: Universal;
}

// the same can be done with interfaces also.
{
  interface Employee {
    name: string;
    startDate: Date;
  }

  interface Admin {
    name: string;
    privileges: String[];
  }

  interface ElevatedEmployee extends Employee, Admin {}
}
