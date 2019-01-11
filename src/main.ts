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

function greeter (person: Person): Text {
	return document.createTextNode(person.firstName + " " + person.lastName);
}

function post(): void {
	let para = document.createElement('p');
	para.setAttribute('id', 'world')
	let node = greeter(new Student("Hello", ", World! ", "Watsonville, CA"));
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
