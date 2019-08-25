"use strict";
/*----------------------------------------------------------------------------------------------
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Z0dBR2dHOztBQUdoRywwQ0FBMEM7QUFDMUMsc0ZBQXNGO0FBQ3RGLHdFQUF3RTtBQUN4RSxvRkFBb0Y7QUFDcEYsMkVBQTJFO0FBQzNFLEVBQUU7QUFDRixTQUFTLE9BQU8sQ0FBQyxPQUFlO0lBQzVCLE1BQU0sR0FBRyxHQUFXLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDbkMsTUFBTSxHQUFHLEdBQVc7UUFDaEIsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLEdBQUcsRUFBRSxHQUFHO0tBQ1gsQ0FBQTtJQUNELE1BQU0sT0FBTyxHQUFXLFdBQVcsQ0FBQztJQUNwQyxJQUFJLEtBQUssR0FBa0IsRUFBRSxDQUFDO0lBRTlCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDMUIsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLElBQUksSUFBSSxJQUFJLEdBQUcsRUFBRTtZQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDcEI7YUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDM0IsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFDbkIsT0FBTyxTQUFTLENBQUM7YUFDcEI7U0FDSjtLQUNKO0lBQ0QsT0FBTyxPQUFPLENBQUM7QUFDbkIsQ0FBQztBQUVRLDBCQUFPO0FBRWhCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO0FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPIiwiZmlsZSI6ImxpYi9wYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogIENvcHlyaWdodCAoYykgQWxtYXJheiBMYWJzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKiAgTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG5cclxuLy9cdGZ1bmN0aW9uIGlzVmFsaWQgLSBDb21wbGV4aXR5IEFuYWx5c2lzOlxyXG4vL1x0ICAtIFRpbWUgQ29tcGxleGl0eTogTyhuKSBiZWNhdXNlIHdlIHNpbXBseSB0cmF2ZXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIG9uZSBjaGFyYWN0ZXJcclxuLy8gICAgICBhdCBhIHRpbWUgYW5kIHB1c2ggYW5kIHBvcCBvcGVyYXRpb25zIG9uIGEgc3RhY2sgdGFrZSBPKDEpIHRpbWUuXHJcbi8vICAgIC0gU3BhY2UgQ29tcGxleGl0eTogTyhuKSBhcyB3ZSBwdXNoIGFsbCBvcGVuaW5nIGJyYWNrZXRzIG9udG8gdGhlIHN0YWNrIGFuZCBpblxyXG4vLyAgICAgIHdvcnN0IGNhc2UsIHdlIHdpbGwgZW5kIHVwIHB1c2hpbmcgYWxsIHRoZSBicmFja2V0cyBvbnRvIHRoZSBzdGFjay5cclxuLy9cclxuZnVuY3Rpb24gaXNWYWxpZChzdHJpbmdwOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgbGVuOiBudW1iZXIgPSBzdHJpbmdwLmxlbmd0aDtcclxuICAgIGNvbnN0IG1hcDogb2JqZWN0ID0ge1xyXG4gICAgICAgICcoJzogJyknLFxyXG4gICAgICAgICd7JzogJ30nLFxyXG4gICAgICAgICdbJzogJ10nXHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXR0ZXJuOiBSZWdFeHAgPSAvWygpW1xcXXt9XS87XHJcbiAgICBsZXQgc3RhY2s6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNoYXIgPSBzdHJpbmdwW2ldO1xyXG4gICAgICAgIGlmIChjaGFyIGluIG1hcCkge1xyXG4gICAgICAgICAgICBzdGFjay5wdXNoKGNoYXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGF0dGVybi50ZXN0KGNoYXIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhc3QgPSBzdGFjay5wb3AoKTtcclxuICAgICAgICAgICAgaWYgKG1hcFtsYXN0XSAhPSBjaGFyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJWYWxpZFwiO1xyXG59XHJcblxyXG5leHBvcnQgeyBpc1ZhbGlkIH07XHJcblxyXG5jb25zb2xlLmxvZyhpc1ZhbGlkKCd7WyhdKX0nKSk7IC8vIEZhbHNlXHJcbmNvbnNvbGUubG9nKGlzVmFsaWQoJygoKClbXXt9KSknKSk7IC8vIFRydWVcclxuIl19
