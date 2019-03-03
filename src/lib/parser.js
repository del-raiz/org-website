// parser.ts
//
//
//
//	Complexity Analysis (function isValid):
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
    var flag;
    var stack = [];
    for (var i = 0; i < len; i++) {
        var char = stringp[i];
        if (char in map) {
            stack.push(char);
        }
        else if (pattern.test(char)) {
            var last = stack.pop();
            if (map[last] !== char) {
                flag = false;
                return "Invalid";
            }
        }
    }
    flag = stack.length == 0;
    return "Valid";
}
console.log(isValid('{[(])}')); // False
console.log(isValid('((()[]{}))')); // True
