var fs = require("fs");
// 读取.txt文件
fs.readFile("sample.txt", "utf-8", (err, data) => {
    if (err) {
        // console.log(err);
    } else {
        console.log(data)
    }
})
// 读取.png文件
fs.readFile("zyb.png", (err, data) => {
    if (err) {
        // console.log(err);
    } else {
        // console.log(data);
        // console.log(data.length + ' bytes');
        var text = data.toString('utf-8');
        // console.log(text);
        var buf = Buffer.from(text, 'utf-8');
        // console.log(buf);
    }
})
let a = "'name':'hello'"
// 向文件写入内容
// fs.writeFile("sample.txt", a, (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         // console.log("ok");
//     }
// })

// 向文件追加内容
// fs.appendFile("sample.txt", a, (err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         // console.log("ok");
//     }
// })

fs.appendFile("json_demo.json",a,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("ok");
    }
})