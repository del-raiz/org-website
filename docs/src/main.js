//import { isValid } from './lib/parser';
var Citizen = /** @class */ (function () {
    function Citizen(firstName, lastName, city) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.city = city;
        this.fullName = firstName + " " + lastName + " from " + city;
    }
    return Citizen;
}());
function greeter(person) {
    return person.firstName + " " + person.lastName;
}
function activate(id) {
    var element = document.getElementById(id);
    element.classList.add('active');
}
function post() {
    var para = document.createElement('h2');
    para.setAttribute('id', 'world');
    var student = new Citizen("Hello", ", World! ", "Watsonville, CA");
    var string = greeter(student);
    console.log(string);
    var node = document.createTextNode(string);
    para.appendChild(node);
    document.body.appendChild(para);
    setTimeout(function (cb) {
        var child = document.getElementById('world');
        child.parentNode.removeChild(child);
    }, 4000);
}
function reload() {
    location.reload();
}
// function check(str: string) {
//     return "The parenthese string is " + isValid(str) + "!"
// }
