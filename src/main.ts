class Startup {
	public static main(): number {
		console.log('Hello World');
		return 0;
	}
}

//Startup.main();

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
	return document.createTextNode("Made horribly by " + person.firstName + " " + person.lastName);
}

function post (): void {
	let user = new Student("Luis", "M.", "Morelia");
	let x = document.createElement("P");
	let t = greeter(user);
	x.appendChild(t);
	document.body.appendChild(x);
}
