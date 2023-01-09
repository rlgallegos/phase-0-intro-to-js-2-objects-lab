const employee = {
    name: "Sam",
    streetAddress: "555 Myrtle"
};

/*updateEmployeeWithKeyAndValue(): this function should take in three arguments: 
an employee Object, a key and a value. 
This function should not mutate the employee;
 it should return a new Object that has an updated value for the key passed in. 
 Hint: use the spread operator!*/

 function updateEmployeeWithKeyAndValue(object, key, value)
 {
    //copy object
    const newEmployee = {...object};
    //update new object
    newEmployee[key] = value;
    //return value
    return newEmployee;
 }
function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value)
{
    object[key] = value;
    return object;
}
//deletes key from clone of employee and returns new object
//non-destructive
function deleteFromEmployeeByKey(object, key)
{
    const newEmployee = {...object};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(object, key)
{
    delete object[key];
    return object;
}