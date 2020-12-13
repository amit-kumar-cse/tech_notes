{
    type Combinable = string | number;

    function add(a: Combinable, b: Combinable) {
        //def: this is a type-guard.
        if(typeof a === "string" || typeof b === "string") {
            return a.toString() + b.toString();
        }
        return a + b;
    }
}

//in type guards
{
    type Employee = {
        name: string;
        startDate: Date;
    }

    type Admin = {
        name: string;
        privileges: String[]
    }

    type UnknownEmployee = Employee | Admin;
    const amit: UnknownEmployee = {
        name: "amit",
        privileges: ["create-server"],
        startDate: new Date()
    };

    function printEmployeeInformation(emp: UnknownEmployee) {
        console.log('Name: ' + emp.name);
        //lesson: why we used 'in' keyword here. Why typeof was not proper to use here.
        if ('startDate' in emp) {
            console.log('startDate: ' + emp.startDate);
        }
        if('privileges' in emp) {
            console.log('privileges: ' + emp.privileges);
        }
    }

    printEmployeeInformation(amit);
}

//instance of based type guards
{
    class Car {
        drive() {
            console.log('Drive car');
        }
    }

    class Truck {
        drive() {
            console.log('Drive Truck');
        }
        loadCargo(amount: Number) {
            console.log('Load Cargo...' + amount);
        }
    }
    type Vehicle = Car | Truck;
    const v1: Vehicle = new Car();
    const v2: Vehicle = new Truck();

    function useVehicle(v: Vehicle) {
        v.drive();
        if(v instanceof Truck) {
            v.loadCargo(1000);
        }
    }

    useVehicle(v1);
    useVehicle(v2);
}
