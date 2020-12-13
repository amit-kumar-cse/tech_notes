class Department {
    // public readonly id: string;
    private employees: string[] = [];

    constructor(public readonly id: string, private name: string) {
    }

    describe (this: Department) {
        console.log(`Department: ${this.name}`);
    }

    addEmployee (name: string) {
        this.employees.push(name);
    }

    printEmployees = () => {
        console.log(this.employees.length);
        console.log(this.employees);
        this.myPrivateMethod();
    }

    private myPrivateMethod = () => {
        console.log('My private method');
    }
}

class ITDepartment extends Department {
    public admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
}

class AccountsDepeartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounts Dept');
    }

    addReport(report: string) {
        this.reports.push(report);
    }

    printReports = () => {
        console.log(this.reports);
    }
}

const itDepartment = new ITDepartment('d1', ['Finance1']);
itDepartment.addEmployee('Amit Kumar');
itDepartment.addEmployee('Saurabh Kumar');

console.log(itDepartment);
itDepartment.describe();
itDepartment.printEmployees();


