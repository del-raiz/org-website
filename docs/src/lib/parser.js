"use strict";
// parser.ts
//
//
//
Object.defineProperty(exports, "__esModule", { value: true });
//	function isValid - Complexity Analysis:
//	  - Time Complexity: O(n) because we simply traverse the given string one character
//      at a time and push and pop operations on a stack take O(1) time.
//    - Space Complexity: O(n) as we push all opening brackets onto the stack and in
//      worst case, we will end up pushing all the brackets onto the stack.
//
function isValid(stringp) {
    const len = stringp.length;
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const pattern = /[()[\]{}]/;
    let flag;
    let stack = [];
    for (let i = 0; i < len; i++) {
        let char = stringp[i];
        if (char in map) {
            stack.push(char);
        }
        else if (pattern.test(char)) {
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
exports.isValid = isValid;
console.log(isValid('{[(])}')); // False
console.log(isValid('((()[]{}))')); // True

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFlBQVk7QUFDWixFQUFFO0FBQ0YsRUFBRTtBQUNGLEVBQUU7O0FBR0YsMENBQTBDO0FBQzFDLHNGQUFzRjtBQUN0Rix3RUFBd0U7QUFDeEUsb0ZBQW9GO0FBQ3BGLDJFQUEyRTtBQUMzRSxFQUFFO0FBQ0YsU0FBUyxPQUFPLENBQUMsT0FBZTtJQUMvQixNQUFNLEdBQUcsR0FBVyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ25DLE1BQU0sR0FBRyxHQUFXO1FBQ25CLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztLQUNSLENBQUE7SUFDRCxNQUFNLE9BQU8sR0FBVyxXQUFXLENBQUM7SUFDcEMsSUFBSSxJQUFZLENBQUM7SUFDakIsSUFBSSxLQUFLLEdBQWtCLEVBQUUsQ0FBQztJQUU5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzdCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksSUFBSSxHQUFHLEVBQUU7WUFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjthQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDekIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN2QixJQUFJLEdBQUMsS0FBSyxDQUFDO2dCQUNYLE9BQU8sU0FBUyxDQUFDO2FBQ2pCO1NBQ0Q7S0FDRDtJQUNELElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUN6QixPQUFPLE9BQU8sQ0FBQztBQUNoQixDQUFDO0FBRVEsMEJBQU87QUFFaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVE7QUFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8iLCJmaWxlIjoibGliL3BhcnNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHBhcnNlci50c1xyXG4vL1xyXG4vL1xyXG4vL1xyXG5cclxuXHJcbi8vXHRmdW5jdGlvbiBpc1ZhbGlkIC0gQ29tcGxleGl0eSBBbmFseXNpczpcclxuLy9cdCAgLSBUaW1lIENvbXBsZXhpdHk6IE8obikgYmVjYXVzZSB3ZSBzaW1wbHkgdHJhdmVyc2UgdGhlIGdpdmVuIHN0cmluZyBvbmUgY2hhcmFjdGVyXHJcbi8vICAgICAgYXQgYSB0aW1lIGFuZCBwdXNoIGFuZCBwb3Agb3BlcmF0aW9ucyBvbiBhIHN0YWNrIHRha2UgTygxKSB0aW1lLlxyXG4vLyAgICAtIFNwYWNlIENvbXBsZXhpdHk6IE8obikgYXMgd2UgcHVzaCBhbGwgb3BlbmluZyBicmFja2V0cyBvbnRvIHRoZSBzdGFjayBhbmQgaW5cclxuLy8gICAgICB3b3JzdCBjYXNlLCB3ZSB3aWxsIGVuZCB1cCBwdXNoaW5nIGFsbCB0aGUgYnJhY2tldHMgb250byB0aGUgc3RhY2suXHJcbi8vXHJcbmZ1bmN0aW9uIGlzVmFsaWQoc3RyaW5ncDogc3RyaW5nICk6c3RyaW5nIHtcclxuXHRjb25zdCBsZW46IG51bWJlciA9IHN0cmluZ3AubGVuZ3RoO1xyXG5cdGNvbnN0IG1hcDogb2JqZWN0ID0ge1xyXG5cdFx0JygnOiAnKScsXHJcblx0XHQneyc6ICd9JyxcclxuXHRcdCdbJzogJ10nXHJcblx0fVxyXG5cdGNvbnN0IHBhdHRlcm46IFJlZ0V4cCA9IC9bKClbXFxde31dLztcclxuXHRsZXQgZmxhZzpib29sZWFuO1xyXG5cdGxldCBzdGFjazogQXJyYXk8c3RyaW5nPiA9IFtdO1xyXG5cclxuXHRmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcblx0XHRsZXQgY2hhciA9IHN0cmluZ3BbaV07XHJcblx0XHRpZiAoY2hhciBpbiBtYXApIHtcclxuXHRcdFx0c3RhY2sucHVzaChjaGFyKTtcclxuXHRcdH0gZWxzZSBpZiAocGF0dGVybi50ZXN0KGNoYXIpKSB7XHJcblx0XHRcdGNvbnN0IGxhc3QgPSBzdGFjay5wb3AoKTtcdFxyXG5cdFx0XHRpZiAobWFwW2xhc3RdICE9PSBjaGFyKSB7XHJcblx0XHRcdFx0ZmxhZz1mYWxzZTtcclxuXHRcdFx0XHRyZXR1cm4gXCJJbnZhbGlkXCI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0ZmxhZyA9IHN0YWNrLmxlbmd0aCA9PSAwO1xyXG5cdHJldHVybiBcIlZhbGlkXCI7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGlzVmFsaWQgfTtcclxuXHJcbmNvbnNvbGUubG9nKGlzVmFsaWQoJ3tbKF0pfScpKTsgLy8gRmFsc2VcclxuY29uc29sZS5sb2coaXNWYWxpZCgnKCgoKVtde30pKScpKTsgLy8gVHJ1ZSJdfQ==
