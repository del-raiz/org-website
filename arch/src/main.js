function post() {
    var para = document.createElement('h2');
    para.setAttribute('id', 'world');
    var string = "Hello, World! From Watsonville, CA";
    var node = document.createTextNode(string);
    para.appendChild(node);
    document.body.appendChild(para);
    setTimeout(function (cb) {
        var child = document.getElementById('world');
        child.parentNode.removeChild(child);
    }, 4000);
}
//  function check(str: string) {
//      return "The parenthese string is " + isValid(str) + "!"
//  }
