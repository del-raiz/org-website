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
function isValid(stringp) {
    var len = stringp.length;
    var map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    var pattern = /[()[\]{}]/;
    var stack = [];
    for (var i = 0; i < len; i++) {
        var char = stringp[i];
        if (char in map) {
            stack.push(char);
        }
        else if (pattern.test(char)) {
            var last = stack.pop();
            if (map[last] != char) {
                return "Invalid";
            }
        }
    }
    return "Valid";
}
export { isValid };
//console.log(isValid('{[(])}')); // False
//console.log(isValid('((()[]{}))')); // True
