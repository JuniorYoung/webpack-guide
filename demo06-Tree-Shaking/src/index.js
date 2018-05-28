import { cube } from './math.js';

function comp() {
    var ele = document.createElement('pre');
    ele.innerHTML = [
        'Hello webpack',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n');
    return ele;
}
document.body.appendChild(comp());