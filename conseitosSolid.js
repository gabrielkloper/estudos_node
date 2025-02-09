//PRINCIPIOS SOLID
// Single Responsibility Principle (S)
// Open-Closed Principle (O)
// Liskov Substitution Principle (L)
// Interface Segregation Principle (I)
// Dependency Inversion Principle (D)


// Single Responsibility Principle (S)
// According to this principle, a class should have only one reason to change, that is, it should have only one task or responsibility.
// Applying this example to programming, each class or function should have a single responsibility. This simplifies understanding, maintenance, and modification of the code in the future.
//Funções com funções unicas
function calculateSalary(employee) {
    return employee.hoursWorked * employee.hourlyRate;
}
function generateReport(employee, salary) {
    let report = /*...*/
    console.log(report);
}

// Open-Closed Principle (O)
// The second SOLID principle is the open-closed principle. Its official definition holds that software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.
//Example provided with a processPayment() function and how it can be extended to handle different payment methods without modifying the existing code.
function processPaymentWithPayPal(price, accountDetails) {
    /*...*/
    console.log('Payed with PayPal.');
}


// Liskov Substitution Principle (L)
// The Liskov substitution principle states that "objects of a superclass should be replaceable by objects of a subclass without affecting the correctness of the program".
// example function to make HTTP requests
function makeRequest(url, errorHandler) {
    fetch(url)
        .then(response => response.json())
        .catch(error => errorHandler.handle(error))
    }

// We can have several functions to handle errors
const consoleErrorHandler = function handle(error){
    console.log(error)
}

const externalErrorHandler = function handle(error){
    sendErrorToExternalService(error)
}

makeRequest(url, consoleErrorHandler);
makeRequest(url, externalErrorHandler);

// Interface Segregation Principle (I)
// The fourth SOLID principle, "I," refers to the Interface Segregation Principle. Based on this principle, no class should be forced to implement interfaces or methods that it will not use.
// It's better to have specific interfaces, rather than a single general interface. And this also applies to functions in JavaScript.
class Product {
    constructor() { /* */ }

    getDetails() { /* */ }
    displayInFrontEnd() { /* */ }
}

class PhysicalProduct extends Product {
    constructor() {
        super()
    }
    saveToDb() { /* */ }
}
// The example then shows the refactoring following this principle to have a PhysicalProduct class extending Product where the unnecessary method is moved.
class DigitalProduct extends Product{
    // saveToDb() is not extended
}

// Dependency Inversion Principle (D)
// The last principle, "D," is the Dependency Inversion Principle. This principle holds that high-level modules, i.e., the modules that contain strategic decisions and high-level directives, should not depend on low-level modules, which are the modules that contain detailed and low-level logic.
// Both, high-level and low-level modules, should depend on abstractions.
class MySqlConnection {
    connect() { /* */ }
}

class PasswordReminder {
    constructor() {
        this.dbConnection = new MySQLConnection();
    }
}

// Refactor
class MySqlConnection {
    connect() { /* */ }
}
class PostgreSqlConnection {
    connect() { /* */ }
}

class PasswordReminder {
    constructor(connection) {
        this.dbConnection = connection
    }
}
