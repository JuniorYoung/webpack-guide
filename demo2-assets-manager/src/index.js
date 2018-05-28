import _ from 'lodash';
import './style.css';
import imgUrl from './big.png';
import dataJson from './data.json';
import dataXml from './data.xml';

function comp() {
    var eleRoot = document.createElement('div'),
        eleH1 = document.createElement('h1'),
        eleImg = new Image();

    eleH1.innerHTML = _.join(['Hello', 'webpack'], ' ');
    eleH1.classList.add('hello');
    eleImg.src = imgUrl;
    eleRoot.appendChild(eleH1);
    eleRoot.appendChild(eleImg);

    console.log('json: ' + JSON.stringify(dataJson));
    console.log('xml: ' + JSON.stringify(dataXml));

    return eleRoot;
}
document.body.appendChild(comp());