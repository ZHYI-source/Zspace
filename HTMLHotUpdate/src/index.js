function component() {
    const element = document.createElement('h1');
    element.textContent = 'Hello, Webpack 热更新!';
    return element;
}

function component2() {
    const element = document.createElement('p');
    element.textContent = 'Webpack Dev Server 热更新的HTML内容。';
    return element;
}


document.body.appendChild(component());
document.body.appendChild(component2());

