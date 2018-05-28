import _ from 'lodash';

function component() {
    var ele = document.createElement('div');
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me, and look at the console';
    ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
    ele.appendChild(br);
    ele.appendChild(button);

    button.onclick = (event) => {
        import(/* webpackChunkName: "v-print" */ './print.js').then( (module) => {
            var print = module.default;

            print();
        });
    };
    return ele;
}
document.body.appendChild(component());