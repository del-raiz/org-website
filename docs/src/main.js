var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hello World');
        return 0;
    };
    return Startup;
}());
//Startup.main();
var Student = /** @class */ (function () {
    function Student(firstName, lastName, country) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.country = country;
        this.fullName = firstName + " " + lastName + " from " + country;
    }
    return Student;
}());
function greeter(person) {
    return document.createTextNode("Made horribly by " + person.firstName + " " + person.lastName);
}
function post() {
    var user = new Student("Luis", "M.", "Morelia");
    var x = document.createElement("P");
    var t = greeter(user);
    x.appendChild(t);
    document.body.appendChild(x);
}
//# sourceMappingURL=main.js.map