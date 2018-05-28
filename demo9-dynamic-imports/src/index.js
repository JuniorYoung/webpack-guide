function getComponent() {
    return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
        var ele = document.createElement('div');
        ele.innerHTML = _.join(['Hello', 'webpack'], ' ');
        return ele;
    }).catch(error => 'An error occurred while loading the component');
}
getComponent().then(component => {
    document.body.appendChild(component);
});