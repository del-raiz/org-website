/*
*----------------------------------------------------------------------------------------------
*  Copyright (c) Almaraz Labs. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/


//	function isValid - Complexity Analysis:
//	  - Time Complexity: O(n) because we simply traverse the given string one character
//      at a time and push and pop operations on a stack take O(1) time.
//    - Space Complexity: O(n) as we push all opening brackets onto the stack and in
//      worst case, we will end up pushing all the brackets onto the stack.
//
function isValid(stringp: string): string {
    const len: number = stringp.length;
    const map: object = {
        '(': ')',
        '{': '}',
        '[': ']'
    }
    const pattern: RegExp = /[()[\]{}]/;
    let stack: Array<string> = [];

    for (let i = 0; i < len; i++) {
        let char = stringp[i];
        if (char in map) {
            stack.push(char);
        } else if (pattern.test(char)) {
            const last = stack.pop();
            if (map[last] != char) {
                return "Invalid";
            }
        }
    }
    return "Valid";
}

export { isValid };

console.log(isValid('{[(])}')); // False
console.log(isValid('((()[]{}))')); // True
