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
    return document.createTextNode(person.firstName + " " + person.lastName);
}
function post() {
    var user = new Student("Hello", ", World! ", "Watsonville, CA");
    var x = document.createElement("P");
    var t = greeter(user);
    x.appendChild(t);
    document.body.appendChild(x);
}
