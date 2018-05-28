import _ from 'lodash';
import printMe from './print';
import './style.css';

function comp() {
    var eleRoot = document.createElement('div'),
        eleH1 = document.createElement('h1'),
        eleBtn = document.createElement('button');

    eleH1.innerHTML = _.join(['Hello', 'webpack'], ' ');
    eleH1.classList.add('hello');
    eleRoot.appendChild(eleH1);

    eleBtn.innerHTML = 'click me';
    eleBtn.onclick = printMe;
    eleRoot.appendChild(eleBtn);

    return eleRoot;
}
// document.body.appendChild(comp());

let element = comp();
document.body.appendChild(element);

if(module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        // printMe();
        document.body.removeChild(element);
        element = comp();
        document.body.appendChild(element);
    });
}