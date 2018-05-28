import _ from 'lodash';

function comp() {
    var ele = document.createElement('h1');
    ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return ele;
}
document.body.appendChild(comp());