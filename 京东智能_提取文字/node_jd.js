var request = require('request');
var fs = require('fs');
var path = require('path');
const express = require('express');
const app = express();
var crypto = require("crypto");

// 解决跨域问题
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.status(200).send();
    } else {
        next();
    };
});


//解析pots请求
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));



app.use('/uploads', express.static(__dirname + '/uploads'))
const multer = require('multer')
const upload = multer({dest: __dirname + '/../../uploads'})


app.post('/user/fileImg',upload.single('file'), async (req, res) => {
//   const file = req.file
  console.log(req.file);
  res.send(req.file);
});

const hostName = '127.0.0.1';
app.listen(3355, hostName, function () {
    console.log('listening on *:3355');
});


// app.post('/user/fileImg', async (req, res) => {
//     console.log(req.file);
    // res.send(file);
    // var response = req;
    // console.log(req.rawHeaders);
    // res.send(req.rawHeaders);

    // var response = {
    //     fileDate: req.body.fileDate,
    //     fileType: req.body.fileType,
    //     fileImg: (req.body.fileImg).split(',')[1]
    // };
    // if (response) {
    //     const sign_ = '00f46a539e425f5c8da4f1d89fcaa774' + response.fileDate;
    //     var sign_1 = crypto.createHash('md5').update(sign_).digest("hex");
    //     var url = 'https://aiapi.jd.com/jdai/ocr_universal_v2?appkey=b3dbe159a479916ede7581a2dd1f4be2&timestamp=' + response.fileDate + '&sign=' + sign_1;
    //     var requestData = { imageBase64Str: response.fileImg };

    //     console.log(url)
    //     console.log(response.fileImg)
    //     httprequest(url, requestData);

    //     function httprequest(url, data) {
    //         request({
    //             url: url,
    //             method: "POST",
    //             json: true,
    //             headers: {
    //                 "content-type": response.fileType,
    //             },
    //             body: requestData
    //         }, function (error, response, body) {
    //             if (!error && response.statusCode == 200) {
    //                 console.log(body) // 请求成功的处理逻辑
    //                 res.json(body.result)
    //             }
    //         });
    //     };
    // };
// });