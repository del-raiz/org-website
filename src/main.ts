//import { isValid } from './lib/parser';

class Citizen {
	fullName: string;

	constructor(public firstName: string, public lastName: string, public city: string) {
		this.fullName = firstName + " " + lastName + " from " + city;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}

function greeter (person: Person): string {
	return person.firstName + " " + person.lastName;
}

function activate(id: string): void {
	let element = document.getElementById(id);
	element.classList.add('active');
}

function post(): any {
	let para = document.createElement('h2');
	para.setAttribute('id', 'world')
	let student = new Citizen("Hello", ", World! ", "Watsonville, CA");
	let string = greeter(student);
	console.log(string);
	let node = document.createTextNode(string);
	para.appendChild(node);
	document.body.appendChild(para);
	setTimeout(cb => {
		let child = document.getElementById('world');
		child.parentNode.removeChild(child);
	}, 4000);

}

function post2(): any {
	let para = document.createElement('h2');
	para.setAttribute('id','test2');
	let node = document.createTextNode("We are currently under construction...  In the meantime, checkout the ''More'' tab to see how I'm building this website:");
	para.appendChild(node);
	document.body.appendChild(para);
	setTimeout(cb => {
		let child = document.getElementById('test2');
		child.parentNode.removeChild(child);
	}, 4000);
}

function reload(): void {
	location.reload();
}

// function check(str:string) {
// 	return "The parenthese string is " + isValid(str) + "!"
// }