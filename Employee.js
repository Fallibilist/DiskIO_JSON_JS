'use strict'

const fs = require('fs')

/**
 * @name Employee
 * @author Greg Hill
 * @classdesc This class has three properties, name, title, and salary. It can be promoted or unmarshalled from a .json file
 */
class Employee {
  
  /**
   * @constructs Employee
   * @description The constructor for the Employee class
   * @param employeeData An object containing name, title, and salary key value pairs
   */
  constructor (employeeData) {
    this.name = employeeData.name
    this.title = employeeData.title
    this.salary = employeeData.salary
  }
  
  /**
   * @function parseFromFilePath
   * @description A static function that unmarshalls an employee object from a .json file
   * @param pathName The path where the json file is located
   * @returns A new employee object unmarshalled from the .json file
   */
  static parseFromFilePath(pathName) {
    return new Employee(JSON.parse(fs.readFileSync(pathName)))
  }
  
  /**
   * @function promote
   * @description Changes the title and salary of this Employee
   * @param newTitle The new title for this Employee
   * @param newSalary The new salary for this Employee
   */
  promote(newTitle, newSalary) {
    this.title = newTitle
    this.salary = newSalary
  }
}

module.exports = {
  Employee
}
