
console.log('devtools');

chrome.devtools.panels.create('MyPanel', null, 'mypanel.html', function (panel) {
    console.log('自定义面板创建成功！'); // 注意这个log一般看不到
});