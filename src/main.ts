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

function post(): void {
	let user = new Student("Hello", ", World! ", "Watsonville, CA");
	let x = document.createElement('p');
	let t = greeter(user);
	x.appendChild(t);
	document.body.appendChild(x);
}

function post2(): any {
	let para = document.createElement('h2');
	para.setAttribute('id','test');
	let node = document.createTextNode("We are currently under construction...  In the meantime, checkout the ''More'' tab to see how I'm building this website:");
	para.appendChild(node);
	document.body.appendChild(para);
	setTimeout(y => {
		let child = document.getElementById('test');
		child.parentNode.removeChild(child);
	}, 4000)
}

function reload(): void {
	location.reload();
}
