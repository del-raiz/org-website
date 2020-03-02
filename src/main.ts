import isValid from './lib/parser';

function post(): any {
    let para = document.createElement('h2');
    para.setAttribute('id', 'world')
    let string = "Hello, World! From Watsonville, CA"
    let node = document.createTextNode(string);
    para.appendChild(node);
    document.body.appendChild(para);
    setTimeout(cb => {
        let child = document.getElementById('world');
        child.parentNode.removeChild(child);
    }, 4000);
}

//  function check(str: string) {
//      return "The parenthese string is " + isValid(str) + "!"
//  }
