
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

    // Setter method for ID with UC-15 validation
    set id(id) {
        try {
            // UC-15: Check if the ID is a non-zero positive number
            if (id > 0) {
                this._id = id; 
            } else {
                throw new Error('ID is Invalid!'); 
            }
        } catch (error) {
            console.error("UC15 - Error:", error.message); 
        }
    }

    // Setter method for salary with UC-15 validation
    set salary(salary) {
        try {
            // UC-15: Check if the salary is a non-zero positive number
            if (salary > 0) {
                this._salary = salary; 
            } else {
                throw new Error('Salary is Invalid!'); 
            }
        } catch (error) {
            console.error("UC15 - Error:", error.message); 
        }
    }

    // Setter method for gender with UC-15 validation
    set gender(gender) {
        try {
            // UC-15: Regex pattern to check if the gender is M or F
            const genderPattern = /^[MF]$/;
            if (genderPattern.test(gender)) {
                this._gender = gender; 
            } else {
                throw new Error('Gender is Invalid!'); 
            }
        } catch (error) {
            console.error("UC15 - Error:", error.message); 
        }
    }

    // Setter method for startDate with UC-15 validation
    set startDate(startDate) {
        try {
            // UC-15: Check if the start date is not a future date
            const currentDate = new Date();
            if (startDate <= currentDate) {
                this._startDate = startDate; 
            } else {
                throw new Error('Start Date is Invalid!'); 
            }
        } catch (error) {
            console.error("UC15 - Error:", error.message); 
        }
    }

    // toString method to return employee details as a formatted string
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary + 
               ", gender=" + this.gender + ", startDate=" + empDate; // Highlight: include gender and startDate in toString
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