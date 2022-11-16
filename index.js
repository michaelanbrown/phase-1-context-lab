/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = function ([string1, string2, string3, number]) {
    const object = {
        firstName: string1,
        familyName: string2,
        title: string3,
        payPerHour: number,
        timeInEvents: [],
        timeOutEvents: [],
    }
    return object;
}

const createEmployeeRecords = function(array) {
    return array.map(createEmployeeRecord)
}

const createTimeInEvent = function(dateValue) {
    let [date, hour] = dateValue.split(' ');
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date: date
    })
    return this
}

const createTimeOutEvent = function(dateValue) {
    let [date, hour] = dateValue.split(' ');
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date: date
    })
    return this
}

function hoursWorkedOnDate(dateValue) {
    const timeIn = this.timeInEvents.find((timeObj) => timeObj.date === dateValue).hour;
    const timeOut = this.timeOutEvents.find((timeObj) => timeObj.date === dateValue).hour;
    return (timeOut - timeIn)/100
}

function wagesEarnedOnDate(dateValue) {
    const wage = this.payPerHour;
    const hoursWorked = hoursWorkedOnDate.call(this, dateValue);
    return (hoursWorked * wage)
}

function findEmployeeByFirstName(srcArray, firstName) {
    return srcArray.find((employee) => employee.firstName === firstName)
}

function calculatePayroll(array) {
    const payrollTotal = (array.map((employee) => {return allWagesFor.apply(employee)}))
    return payrollTotal.reduce((accumulation, wage) => accumulation + wage)
}