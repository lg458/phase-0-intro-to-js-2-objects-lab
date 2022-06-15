//creating employee object with name and address keys 
const employee = { 
  name: "Bob", 
  address: "1234 Maple Street" 
} 

//nondestructively updates employee object and returns a new employee object with the new key value pair
function updateEmployeeWithKeyAndValue(employee, key, value) { 
  return {
    ...employee,
    [key]: value,
  };
} 

//destructively updates employee with new key value pair by modifying original object and returns updated object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) { 
  employee[key] = value; 
  return employee;
} 

//nondestructively deltes a key from a clone of employee and returns the new employee object 
function deleteFromEmployeeByKey(employee, key) { 
  const newEmployee = {...employee}; 
  delete newEmployee[key]; 
  return newEmployee;
} 

//destructively deletes key value pair and returns the original, now modified employee object
function destructivelyDeleteFromEmployeeByKey(employee, key) { 
  delete employee[key]; 
  return employee;
}