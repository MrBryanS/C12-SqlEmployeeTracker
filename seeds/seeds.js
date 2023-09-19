const employeeData = require("./employeeData.json");
const departmentData = require("./departmentData.json");
const roleData = require("./roleData.json");

// const seedDatabase = () => {
//     return departmentData.bulkCreate(departmentData)

//     .then(() => {
//         return roleData.bulkCreate(roleData)

//     .then(() => {
//         return roleData.bulkCreate(roleData)})
//     }
// };

// const seedDatabase = () => {
//     return departmentData.bulkCreate(departmentData)

//     .then(() => {
//         return roleData.bulkCreate(roleData))

//     .then(() => {
//         return roleData.bulkCreate(roleData)})
//    };

const seedDatabase = () => {
  return departmentData
    .bulkCreate(departmentData)
    .then(() => {
      return roleData.bulkCreate(roleData);
    })
    .then(() => {
      return employeeData.bulkCreate(employeeData);
    });
};
