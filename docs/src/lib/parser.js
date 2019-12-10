"use strict";
/*
*----------------------------------------------------------------------------------------------
*  Copyright (c) Almaraz Labs. All rights reserved.
*  Licensed under the MIT License. See License.txt in the project root for license information.
*--------------------------------------------------------------------------------------------*/
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
    let stack = [];
    for (let i = 0; i < len; i++) {
        let char = stringp[i];
        if (char in map) {
            stack.push(char);
        }
        else if (pattern.test(char)) {
            const last = stack.pop();
            if (map[last] != char) {
                return "Invalid";
            }
        }
    }
    return "Valid";
}
exports.isValid = isValid;
console.log(isValid('{[(])}')); // False
console.log(isValid('((()[]{}))')); // True

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OytGQUkrRjs7QUFHL0YsMENBQTBDO0FBQzFDLHNGQUFzRjtBQUN0Rix3RUFBd0U7QUFDeEUsb0ZBQW9GO0FBQ3BGLDJFQUEyRTtBQUMzRSxFQUFFO0FBQ0YsU0FBUyxPQUFPLENBQUMsT0FBZTtJQUM1QixNQUFNLEdBQUcsR0FBVyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ25DLE1BQU0sR0FBRyxHQUFXO1FBQ2hCLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztLQUNYLENBQUE7SUFDRCxNQUFNLE9BQU8sR0FBVyxXQUFXLENBQUM7SUFDcEMsSUFBSSxLQUFLLEdBQWtCLEVBQUUsQ0FBQztJQUU5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksSUFBSSxHQUFHLEVBQUU7WUFDYixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3BCO2FBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzNCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN6QixJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQ25CLE9BQU8sU0FBUyxDQUFDO2FBQ3BCO1NBQ0o7S0FDSjtJQUNELE9BQU8sT0FBTyxDQUFDO0FBQ25CLENBQUM7QUFFUSwwQkFBTztBQUVoQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUTtBQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyIsImZpbGUiOiJsaWIvcGFyc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuKiAgQ29weXJpZ2h0IChjKSBBbG1hcmF6IExhYnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiogIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXHJcbiotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuLy9cdGZ1bmN0aW9uIGlzVmFsaWQgLSBDb21wbGV4aXR5IEFuYWx5c2lzOlxyXG4vL1x0ICAtIFRpbWUgQ29tcGxleGl0eTogTyhuKSBiZWNhdXNlIHdlIHNpbXBseSB0cmF2ZXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIG9uZSBjaGFyYWN0ZXJcclxuLy8gICAgICBhdCBhIHRpbWUgYW5kIHB1c2ggYW5kIHBvcCBvcGVyYXRpb25zIG9uIGEgc3RhY2sgdGFrZSBPKDEpIHRpbWUuXHJcbi8vICAgIC0gU3BhY2UgQ29tcGxleGl0eTogTyhuKSBhcyB3ZSBwdXNoIGFsbCBvcGVuaW5nIGJyYWNrZXRzIG9udG8gdGhlIHN0YWNrIGFuZCBpblxyXG4vLyAgICAgIHdvcnN0IGNhc2UsIHdlIHdpbGwgZW5kIHVwIHB1c2hpbmcgYWxsIHRoZSBicmFja2V0cyBvbnRvIHRoZSBzdGFjay5cclxuLy9cclxuZnVuY3Rpb24gaXNWYWxpZChzdHJpbmdwOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGVuOiBudW1iZXIgPSBzdHJpbmdwLmxlbmd0aDtcclxuICAgIGNvbnN0IG1hcDogb2JqZWN0ID0ge1xyXG4gICAgICAgICcoJzogJyknLFxyXG4gICAgICAgICd7JzogJ30nLFxyXG4gICAgICAgICdbJzogJ10nXHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXR0ZXJuOiBSZWdFeHAgPSAvWygpW1xcXXt9XS87XHJcbiAgICBsZXQgc3RhY2s6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNoYXIgPSBzdHJpbmdwW2ldO1xyXG4gICAgICAgIGlmIChjaGFyIGluIG1hcCkge1xyXG4gICAgICAgICAgICBzdGFjay5wdXNoKGNoYXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGF0dGVybi50ZXN0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgaWYgKG1hcFtsYXN0XSAhPSBjaGFyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJWYWxpZFwiO1xyXG59XHJcblxyXG5leHBvcnQgeyBpc1ZhbGlkIH07XHJcblxyXG5jb25zb2xlLmxvZyhpc1ZhbGlkKCd7WyhdKX0nKSk7IC8vIEZhbHNlXHJcbmNvbnNvbGUubG9nKGlzVmFsaWQoJygoKClbXXt9KSknKSk7IC8vIFRydWVcclxuIl19
