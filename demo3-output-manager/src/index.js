import _ from 'lodash';
import printMe from './print';

function comp() {
    var eleRoot = document.createElement('div'),
        eleH1 = document.createElement('h1'),
        eleBtn = document.createElement('button');

    eleH1.innerHTML = _.join(['Hello', 'webpack'], ' ');
    eleRoot.appendChild(eleH1);

    eleBtn.innerHTML = 'click me';
    eleBtn.onclick = printMe;
    eleRoot.appendChild(eleBtn);

    return eleRoot;
}
document.body.appendChild(comp());