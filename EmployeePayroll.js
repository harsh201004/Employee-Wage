
// UC-12: Create Employee Payroll Class

// Creating Class EmployeePayrollData to store employee payroll details
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

    // Setter method for name with UC-14 validation
    set name(name) {
        try {
            // UC-14: Regex pattern to check if the name starts with a capital letter and has at least 3 characters
            const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
            if (namePattern.test(name)) {
                this._name = name; 
            } else {
                throw new Error('Name is Invalid!'); 
            }
        } catch (error) {
            console.error("UC14 - Error:", error.message); 
        }
    }

    // toString method to return employee details as a formatted string
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary + 
               ", gender=" + this.gender + ", startDate=" + empDate; 
    }
}

// Creating an EmployeePayrollData object with id, name, salary, gender, and startDate
let employeePayrollData = new EmployeePayrollData([1, "Mark", 30000, "M", new Date()]);
console.log(employeePayrollData.toString());

// Updating employee name using setter with UC-14 validation
employeePayrollData.name = "John"; // This should pass
console.log(employeePayrollData.toString());

employeePayrollData.name = "jo"; // This should fail
console.log(employeePayrollData.toString());

// Creating another EmployeePayrollData object with all properties
let newEmployeePayrollData = new EmployeePayrollData([2, "Terrisa", 30000, "F", new Date()]);
console.log(newEmployeePayrollData.toString());