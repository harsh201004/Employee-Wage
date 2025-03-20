

// UC-12 & 13: Extend Employee Payroll Data to store gender and start date

class EmployeePayrollData {
    // Properties: id, name, salary, gender, startDate
    id;
    salary;
    gender; // UC-13: Added gender property
    startDate; // UC-13: Added startDate property
    
    // Constructor to initialize employee payroll properties
    constructor(params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3]; // UC-13: Initialize gender property
        this.startDate = params[4]; // UC-13: Initialize startDate property
    }

    // Getter method for name
    get name() { return this._name; }

    // Setter method for name
    set name(name) { this._name = name; }

    // toString method to return employee details as a formatted string
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary + 
               ", gender=" + this.gender + ", startDate=" + empDate; // Highlight: include gender and startDate in toString
    }
}

// Creating an EmployeePayrollData object with id, name, salary, gender, and startDate
let newEmployeePayrollData = new EmployeePayrollData([2, "Terrisa", 30000, "F", new Date()]);
console.log(newEmployeePayrollData.toString());