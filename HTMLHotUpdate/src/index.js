function component() {
    const element = document.createElement('h1');
    element.textContent = 'Hello, Webpack 热更新!';
    return element;
}

function component2() {
    const element = document.createElement('p');
    element.textContent = 'Webpack Dev Server 热更新将会触发浏览器的局部自动刷新，以加载最新的文件内容，更新页面显示。这将让你一边修改代码，一边看到实时的效果，就像是在刷新页面一样。';
    return element;
}

document.body.appendChild(component());
document.body.appendChild(component2());

