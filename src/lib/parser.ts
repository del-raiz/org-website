// parser.ts
//
//
//


//	function isValid - Complexity Analysis:
//	  - Time Complexity: O(n) because we simply traverse the given string one character
//      at a time and push and pop operations on a stack take O(1) time.
//    - Space Complexity: O(n) as we push all opening brackets onto the stack and in
//      worst case, we will end up pushing all the brackets onto the stack.
//
function isValid(stringp: string ):string {
	const len: number = stringp.length;
	const map: object = {
		'(': ')',
		'{': '}',
		'[': ']'
	}
	const pattern: RegExp = /[()[\]{}]/;
	let flag:boolean;
	let stack: Array<string> = [];

	for (let i = 0; i < len; i++) {
		let char = stringp[i];
		if (char in map) {
			stack.push(char);
		} else if (pattern.test(char)) {
			const last = stack.pop();	
			if (map[last] !== char) {
				flag = false;
				return "Invalid";
			}
		}
	}
	flag = stack.length == 0;
	return "Valid";
}

export { isValid };

console.log(isValid('{[(])}')); // False
console.log(isValid('((()[]{}))')); // True