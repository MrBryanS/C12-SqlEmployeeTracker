const departmentData = require('./departmentData.json');
const roleData = require('./roleData.json');
const employeeData = require('./employeeData.json');

const seedDatabase = () => {
    return departmentData.bulkCreate(departmentData)
    .then(() => {
        return roleData.bulkCreate(roleData)
    }
    .then(() => {
        return employeeData.bulkCreate(employeeData)
    }
}
