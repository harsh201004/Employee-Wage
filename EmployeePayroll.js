
// UC-12: Create Employee Payroll Class 

// Creating Class EmployeePayrollData to store employee payroll details
class EmployeePayrollData {
    id;
    salary;
    gender;
    startDate;
    
    // Constructor to initialize employee payroll properties
    constructor(params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
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
               ", gender=" + this.gender + ", startDate=" + empDate;
    }
}

// Creating an EmployeePayrollData object with id, name, and salary
let employeePayrollData = new EmployeePayrollData([1, "Mark", 30000]);
console.log(employeePayrollData.toString());

// Updating employee name using setter
employeePayrollData.name = "John";
console.log(employeePayrollData.toString());

// Creating another EmployeePayrollData object with all properties
let newEmployeePayrollData = new EmployeePayrollData([2, "Terrisa", 30000, "F", new Date()]);
console.log(newEmployeePayrollData.toString());