var greet = require("./hello");
var s = "zyb";
greet(s)



// process.nextTick()将在下一轮事件循环中调用:
process.nextTick(()=> {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');


// 程序即将退出时的回调函数:
process.on('exit', (code) =>{
    console.log('about to exit with code: ' + code);
});

// 判断JavaScript执行环境
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}