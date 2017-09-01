# DiskIO_JSON_JS
This project reads and writes to the disk using JSON on Node.js

## Classes

<dl>
<dt><a href="#Employee">Employee</a></dt>
<dd></dd>
</dl>

## Members

<dl>
<dt><a href="#Employee">Employee</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#parseFromFilePath">parseFromFilePath(pathName)</a> ⇒</dt>
<dd><p>A static function that unmarshalls an employee object from a .json file</p>
</dd>
<dt><a href="#promote">promote(newTitle, newSalary)</a></dt>
<dd><p>Changes the title and salary of this Employee</p>
</dd>
</dl>

<a name="Employee"></a>

## Employee
**Kind**: global class
<a name="new_Employee_new"></a>

### new Employee(employeeData)
The constructor for the Employee class


| Param | Description |
| --- | --- |
| employeeData | An object containing name, title, and salary key value pairs |

<a name="Employee"></a>

## Employee
**Kind**: global variable

**Author**: Greg Hill
<a name="new_Employee_new"></a>

### new Employee(employeeData)
The constructor for the Employee class


| Param | Description |
| --- | --- |
| employeeData | An object containing name, title, and salary key value pairs |

<a name="parseFromFilePath"></a>

## parseFromFilePath(pathName) ⇒
A static function that unmarshalls an employee object from a .json file

**Kind**: global function

**Returns**: A new employee object unmarshalled from the .json file

| Param | Description |
| --- | --- |
| pathName | The path where the json file is located |

<a name="promote"></a>

## promote(newTitle, newSalary)
Changes the title and salary of this Employee

**Kind**: global function

| Param | Description |
| --- | --- |
| newTitle | The new title for this Employee |
| newSalary | The new salary for this Employee |
