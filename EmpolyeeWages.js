//UC1
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random() * 10) % 2;
if (empCheck === IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is PRESENT");
}

// UC-2
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
let empCheckSwitch = Math.floor(Math.random() * 10) % 3;

switch (empCheckSwitch) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);

// UC-3
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let empCheckUC3 = Math.floor(Math.random() * 10) % 3;
let empHrsUC3 = getWorkingHours(empCheckUC3);
let empWageUC3 = empHrsUC3 * WAGE_PER_HOUR;
console.log("Emp Wage per working hours: " + empWageUC3);

// UC-4: Calculate Wage for a Month (Assuming 20 Working Days)
const NUM_OF_WORKING_DAYS = 20;
let totalEmpHrs = 0;

// Loop through 20 days to accumulate working hours
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

// Calculate and Display Monthly Wage
console.log(`Total Monthly Hours: ${totalEmpHrs}, Total Monthly Wage: ${totalEmpHrs * WAGE_PER_HOUR}`);

// UC-5: Calculate Wages Till a Condition of Total Working Hours or Days is Reached
const MAX_HRS_IN_MONTH = 100;
const NUM_OF_WORKING_DAYS_LIMIT = 10;
let totalEmpHrsLimit = 0;
let totalWorkingDaysLimit = 0;

// Use a while loop to ensure work continues until either max hours or max days are reached
while (totalEmpHrsLimit < MAX_HRS_IN_MONTH && totalWorkingDaysLimit < NUM_OF_WORKING_DAYS_LIMIT) {
    totalWorkingDaysLimit++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrsLimit += getWorkingHours(empCheck);
    let empWageLimit = totalEmpHrsLimit * WAGE_PER_HOUR;

    // Display running totals for days worked, hours worked, and wages
    console.log(`Total Days: ${totalWorkingDaysLimit}, Total Hrs: ${totalEmpHrsLimit}, Emp Wage: ${empWageLimit}`);
}

// UC-6: Store Daily Wage in an Array

// Function to calculate daily wage based on hours worked
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

// Define max conditions for the while loop
const MAX_HRS_INMONTH = 160;
const NUM_OF_WORKINGDAYS = 20;
let totalEmpHr = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array(); // Array to store daily wages

// Use a while loop to track wages over time
while (totalEmpHr <= MAX_HRS_INMONTH && totalWorkingDays < NUM_OF_WORKINGDAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHr += empHrs;
    empDailyWageArr.push(calcDailyWage(empHrs)); // Store daily wage in array
}

// Calculate total wage
empWage = calcDailyWage(totalEmpHr);

// Display total work stats and daily wages array
console.log(`Total Days: ${totalWorkingDays}, Total Hrs: ${totalEmpHr}, Emp Wage: ${empWage}`);
console.log("Daily Wages Array:", empDailyWageArr);

// UC-7: Filter data using Array Helper Functions

// UC7A: Calculate Total Employee Wage using forEach and reduce
let totalEmpWage = 0;
empDailyWageArr.forEach(wage => totalEmpWage += wage);
console.log("UC7A - Total Wage using forEach:", totalEmpWage);
console.log("UC7A - Total Wage using reduce:", empDailyWageArr.reduce((total, wage) => total + wage, 0));

// UC7B: Map Day with Daily Wage
let dailyCounter = 0;
let mapDayWithWageArr = empDailyWageArr.map(wage => `Day ${++dailyCounter}: ${wage}`);
console.log("UC7B - Day with Wages:", mapDayWithWageArr);

// UC7C: Filter Days with Full-Time Wage
let fullTimeWageArr = empDailyWageArr.filter(wage => wage === 160);
console.log("UC7C - Full-Time Wage Days:", fullTimeWageArr);

// UC7D: Find First Day with Full-Time Wage
console.log("UC7D - First Full-Time Wage Earned on:", empDailyWageArr.find(wage => wage === 160));

// UC7E: Check if All Entries are Full-Time Wage
console.log("UC7E - Are all full-time wages?:", fullTimeWageArr.every(wage => wage === 160));

// UC7F: Check if Any Part-Time Wage Exists
console.log("UC7F - Is there any Part-Time Wage?:", empDailyWageArr.some(wage => wage === 80));

// UC7G: Count Number of Days Worked
let totalDaysWorked = empDailyWageArr.reduce((days, wage) => (wage > 0 ? days + 1 : days), 0);
console.log("UC7G - Number of Days Worked:", totalDaysWorked);

// UC 8: Store Daily Wage in a Map 
let empDailyWageMap = new Map();
totalEmpHr = 0;
totalWorkingDays = 0;

while (totalEmpHr <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHr += empHrs;
    let dailyWage = calcDailyWage(empHrs);
    
    // Storing Day-wise Wage in Map
    empDailyWageMap.set(totalWorkingDays, dailyWage);
}

console.log("UC8 - Employee Daily Wage Map:", empDailyWageMap);

// UC8A: Calculate Total Wage using Map
let totalWageFromMap = Array.from(empDailyWageMap.values()).reduce((total, wage) => total + wage, 0);
console.log("UC8A - Total Employee Wage from Map:", totalWageFromMap);

//UC-9: Store Daily Hours and Wages in a Map 
let empDailyHrsMap = new Map();
empDailyHrsMap.set(1, 8);
empDailyHrsMap.set(2, 4);
empDailyHrsMap.set(3, 0);
empDailyHrsMap.set(4, 8);
empDailyHrsMap.set(5, 4);

// UC-9A: Compute Total Hours and Wages using Arrow Functions
const findTotal = (totalVal, dailyVal) => totalVal + dailyVal;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC9A - Employee Wage with Arrow Functions:", "Total Hours:", totalHours, "Total Wages:", totalSalary);

// UC-9B: Categorize Working Days
let nonWorkingDays = [];
let partWorkingDays = [];
let fullWorkingDays = [];

empDailyHrsMap.forEach((value, key) => {
    if (value === 8) fullWorkingDays.push(key);
    else if (value === 4) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});

console.log("UC9B - Full Working Days:", fullWorkingDays);
console.log("UC9B - Part-Time Working Days:", partWorkingDays);
console.log("UC9B - Non-Working Days:", nonWorkingDays);

// UC-10: Storing Daily Work Hours and Wages in an Object Array
let empDailyHrsAndWageArr = new Array();
let totalEmpHrs1 = 0;  
let totalWorkingDays1 = 0;

// Iterating Until Maximum Working Hours or Days Reached
while (totalEmpHrs1 < MAX_HRS_IN_MONTH && totalWorkingDays1 < NUM_OF_WORKING_DAYS) {
    totalWorkingDays1++;  
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs1 += empHrs;  

    // Storing Each Day's Work Details as an Object
    empDailyHrsAndWageArr.push({
        dayNum: totalWorkingDays1,  
        dailyHours: empHrs,
        dailyWage: calcDailyWage(empHrs),
        toString() {
            return '\nDay ' + this.dayNum + ' Working Hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage;
        }
    });
}

// Displaying the Daily Hours Worked and Wage Earned in an Array of Objects
console.log("UC10 - Showing Daily Hours Worked and Wage Earned:", empDailyHrsAndWageArr);

// UC-11: Using Object Functions 

// UC-11A: Calculate Total Hours and Wages using Object Functions
let totalWage = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyWage > 0)
    .reduce((totalWage, dailyHrsAndWage) => totalWage + dailyHrsAndWage.dailyWage, 0);

let totalHour = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours > 0)
    .reduce((totalHours, dailyHrsAndWage) => totalHours + dailyHrsAndWage.dailyHours, 0);

console.log("UC11A - Total Hours: " + totalHour + " Total Wages: " + totalWage);

// UC-11B: Logging Full Work Days
console.log("UC11B - Logging Full Work Days");
empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours === 8)
    .forEach(dailyHrsAndWage => console.log(dailyHrsAndWage.toString()));

// UC-11C: Storing Part-Time Work Days in an Array
let partWorkingDayStrArr = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours === 4)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("UC11C - PartWorkingDayStrings: " + partWorkingDayStrArr);

// UC-11D: Storing Non-Working Days in an Array
let nonWorkingDayStrArr = empDailyHrsAndWageArr
    .filter(dailyHrsAndWage => dailyHrsAndWage.dailyHours === 0)
    .map(dailyHrsAndWage => dailyHrsAndWage.toString());
console.log("UC11D - NonWorkingDayStrings: " + nonWorkingDayStrArr);