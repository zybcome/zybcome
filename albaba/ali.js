const https = require('https');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const cheerio = require('cheerio');
var url = 'https://p4psearch.1688.com/p4p114/p4psearch/offer.htm?keywords=' + val;
var val = '短袖';
https.get(url, function (res) {
    var html = '';
    res.on("data", function (chunk) {
        html += chunk;
    });
    res.on("end", function () {
        // console.log(html);
        // const dom = new JSDOM(html);
        // console.log(dom.window.document);
        doSomeThing(html);
    });
});


function doSomeThing(html) {

    // 使用cheerio模块装载我们得到的页面源代码,返回的是一个类似于jquery中的$对象

    // var $ = cheerio.load(html);
    var num1 = html.indexOf('{"attr":{')+9;
    var num2 = html.indexOf('"useAlipay":')+12;
    console.log(num1,num2)
    var str = html.slice(num1,num2);
    var str_1 = str+"false";
    var json_ = JSON.parse( str_1 );
    console.log(json_);
    //使用这个$对象就像操作jquery对象一般去操作我们获取得到的页面的源代码

    // var $html = $("html");
    // var html = new JSDOM(html)
    // console.log(html.parent);
    // 将我们需要的文字信息存储在一个数组中

    // var result = [];

    // $menu_box.each(function (i, item) {

    // var obj = {};
    // console.log(item)
    // var h2 = $(item).find("h2").text().trim();

    // obj.name = h2;

    // var $as = $(item).find("a");

    // obj.subName = [];

    // $as.each(function (i, item) {

    //     obj.subName.push($(item).text());

    // });

    // result.push(obj);

    // });

    //最后我们输出这个结果

    // console.log(result);

}