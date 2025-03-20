// Write your solution in this file!
const employee = {
    name: 'John Doe',
    streetAddress : '456 Broadway',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
    }

    function deleteFromEmployeeByKey(employee, key, value) {
        const {[key] : deletekey, ...newWmployee} = employee
        return newWmployee;
    }

    function destructivelyDeleteFromEmployeeByKey(employee, keyy, value) {
        delete employee[keyy];
        return employee;
    }