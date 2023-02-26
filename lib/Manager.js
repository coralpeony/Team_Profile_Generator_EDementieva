// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    officeNumber = parseInt(officeNumber)
    if (typeof officeNumber !== "number" || isNaN(officeNumber)) {
      throw new Error("Please enter a positive number.");
    }
    this.officeNumber = officeNumber;
    this.role = "Manager";

  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return this.role;
  }
}

module.exports = Manager;
