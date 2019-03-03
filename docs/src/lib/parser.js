"use strict";
// parser.ts
//
//
//
Object.defineProperty(exports, "__esModule", { value: true });
//	Complexity Analysis (function isValid):
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
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
console.log(isValid('{[(])}')); // False
console.log(isValid('((()[]{}))')); // True

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpYi9wYXJzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLFlBQVk7QUFDWixFQUFFO0FBQ0YsRUFBRTtBQUNGLEVBQUU7O0FBR0YsMENBQTBDO0FBQzFDLHNGQUFzRjtBQUN0Rix3RUFBd0U7QUFDeEUsb0ZBQW9GO0FBQ3BGLDJFQUEyRTtBQUMzRSxFQUFFO0FBRUYsU0FBUyxPQUFPLENBQUMsT0FBZTtJQUMvQixNQUFNLEdBQUcsR0FBVyxPQUFPLENBQUMsTUFBTSxDQUFDO0lBQ25DLE1BQU0sR0FBRyxHQUFXO1FBQ25CLEdBQUcsRUFBRSxHQUFHO1FBQ1IsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztLQUNSLENBQUE7SUFDRCxNQUFNLE9BQU8sR0FBVyxXQUFXLENBQUM7SUFDcEMsSUFBSSxJQUFZLENBQUM7SUFDakIsSUFBSSxLQUFLLEdBQWtCLEVBQUUsQ0FBQztJQUU5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzdCLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QixJQUFJLElBQUksSUFBSSxHQUFHLEVBQUU7WUFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjthQUFNLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDekIsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO2dCQUN2QixJQUFJLEdBQUMsS0FBSyxDQUFDO2dCQUNYLE9BQU8sU0FBUyxDQUFDO2FBQ2pCO1NBQ0Q7S0FDRDtJQUNELElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztJQUN6QixPQUFPLE9BQU8sQ0FBQztBQUNoQixDQUFDO0FBUVEsMEJBQU87QUFOaEIsSUFBSyxTQUtKO0FBTEQsV0FBSyxTQUFTO0lBQ2Isc0JBQVMsQ0FBQTtJQUNULDBCQUFhLENBQUE7SUFDYiwwQkFBYSxDQUFBO0lBQ2IsNEJBQWUsQ0FBQTtBQUNoQixDQUFDLEVBTEksU0FBUyxLQUFULFNBQVMsUUFLYjtBQUdELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRO0FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPIiwiZmlsZSI6ImxpYi9wYXJzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYXJzZXIudHNcclxuLy9cclxuLy9cclxuLy9cclxuXHJcblxyXG4vL1x0Q29tcGxleGl0eSBBbmFseXNpcyAoZnVuY3Rpb24gaXNWYWxpZCk6XHJcbi8vXHQgIC0gVGltZSBDb21wbGV4aXR5OiBPKG4pIGJlY2F1c2Ugd2Ugc2ltcGx5IHRyYXZlcnNlIHRoZSBnaXZlbiBzdHJpbmcgb25lIGNoYXJhY3RlclxyXG4vLyAgICAgIGF0IGEgdGltZSBhbmQgcHVzaCBhbmQgcG9wIG9wZXJhdGlvbnMgb24gYSBzdGFjayB0YWtlIE8oMSkgdGltZS5cclxuLy8gICAgLSBTcGFjZSBDb21wbGV4aXR5OiBPKG4pIGFzIHdlIHB1c2ggYWxsIG9wZW5pbmcgYnJhY2tldHMgb250byB0aGUgc3RhY2sgYW5kIGluXHJcbi8vICAgICAgd29yc3QgY2FzZSwgd2Ugd2lsbCBlbmQgdXAgcHVzaGluZyBhbGwgdGhlIGJyYWNrZXRzIG9udG8gdGhlIHN0YWNrLlxyXG4vL1xyXG5cclxuZnVuY3Rpb24gaXNWYWxpZChzdHJpbmdwOiBzdHJpbmcgKTpzdHJpbmcge1xyXG5cdGNvbnN0IGxlbjogbnVtYmVyID0gc3RyaW5ncC5sZW5ndGg7XHJcblx0Y29uc3QgbWFwOiBvYmplY3QgPSB7XHJcblx0XHQnKCc6ICcpJyxcclxuXHRcdCd7JzogJ30nLFxyXG5cdFx0J1snOiAnXSdcclxuXHR9XHJcblx0Y29uc3QgcGF0dGVybjogUmVnRXhwID0gL1soKVtcXF17fV0vO1xyXG5cdGxldCBmbGFnOmJvb2xlYW47XHJcblx0bGV0IHN0YWNrOiBBcnJheTxzdHJpbmc+ID0gW107XHJcblxyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuXHRcdGxldCBjaGFyID0gc3RyaW5ncFtpXTtcclxuXHRcdGlmIChjaGFyIGluIG1hcCkge1xyXG5cdFx0XHRzdGFjay5wdXNoKGNoYXIpO1xyXG5cdFx0fSBlbHNlIGlmIChwYXR0ZXJuLnRlc3QoY2hhcikpIHtcclxuXHRcdFx0Y29uc3QgbGFzdCA9IHN0YWNrLnBvcCgpO1x0XHJcblx0XHRcdGlmIChtYXBbbGFzdF0gIT09IGNoYXIpIHtcclxuXHRcdFx0XHRmbGFnPWZhbHNlO1xyXG5cdFx0XHRcdHJldHVybiBcIkludmFsaWRcIjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRmbGFnID0gc3RhY2subGVuZ3RoID09IDA7XHJcblx0cmV0dXJuIFwiVmFsaWRcIjtcclxufVxyXG5cclxuZW51bSBEaXJlY3Rpb24ge1xyXG5cdFVwID0gXCJVUFwiLFxyXG5cdERvd24gPSBcIkRPV05cIixcclxuXHRMZWZ0ID0gXCJMRUZUXCIsXHJcblx0UmlnaHQgPSBcIlJJR0hUXCIsXHJcbn1cclxuZXhwb3J0IHsgaXNWYWxpZCB9O1xyXG5cclxuY29uc29sZS5sb2coaXNWYWxpZCgne1soXSl9JykpOyAvLyBGYWxzZVxyXG5jb25zb2xlLmxvZyhpc1ZhbGlkKCcoKCgpW117fSkpJykpOyAvLyBUcnVlIl19
