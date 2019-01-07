class Student {
	fullName: string;

	constructor(public firstName: string, public lastName: string, public country: string) {
		this.fullName = firstName + " " + lastName + " from " + country;
	}
}

interface Person {
	firstName: string;
	lastName: string;
}


function greeter (person: Person) {
	return document.createTextNode(person.firstName + " " + person.lastName);
}

function post (): void {
	let user = new Student("Hello", ",World! ", "Watsonville, CA");
	let x = document.createElement("P");
	let t = greeter(user);
	x.appendChild(t);
	document.body.appendChild(x);
}

