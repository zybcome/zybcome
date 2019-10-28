const express = require('express');
const path = require('path');
const crypto = require("crypto"); 
const request = require("request");
const app = express();
// var multer = require('multer')
// const upload = multer({ dest: 'uploads/' })

const hostName = '127.0.0.1';
app.listen(3356, hostName, function () {
    console.log('http://127.0.0.1:3356');
});




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



// app.use('/uploads', express.static(__dirname + '/uploads'))
// const multer = require('multer')
// const upload = multer({ dest: __dirname + '/uploads' })




app.use('/uploads', express.static(__dirname + '/uploads'));
const multer = require('multer');
// const upload = multer({ dest: __dirname + '/uploads' })


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, './uploads'));
    },
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null, 'img_ID' + '-' + Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
});

var upload = multer({ storage: storage });











// elementUi上传
app.post('/user/fileImg', upload.single('file'), async (req, res) => {
    new Promise(function (resolve, reject) {
        const file = req.file;
        file.url = "http://"+((file.path).split('wwwroot/'))[1];
        resolve(file)
    }).then(function (file) {
        const sign_ = '00f46a539e425f5c8da4f1d89fcaa774' + Date.now();
        var sign_1 = crypto.createHash('md5').update(sign_).digest("hex");
        var url = 'https://aiapi.jd.com/jdai/ocr_universal_v2?appkey=b3dbe159a479916ede7581a2dd1f4be2&timestamp=' + Date.now() + '&sign=' + sign_1;
        var imgurl = { imageUrl: file.url };
        httprequest(url,imgurl,file);

        function httprequest(url,imgurl,file) {
            request({
                url: url,
                method: "POST",
                json: true,
                headers: {
                    "content-type": file.mimetype,
                },
                body: imgurl
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    // 请求成功的处理逻辑
                    res.json(Object.assign(body.result,file))
                } else {
                    console.log(error)
                }
            });
        };
    });
});




// app.use(upload.single('file'))






app.post('/user/fileImg1', async (req, res) => {
    // 默认上传
    var response = req;
    var response = {
        fileDate: req.body.fileDate,
        fileType: req.body.fileType,
        fileImg: (req.body.fileImg).split(',')[1]
    };
    if (response) {
        const sign_ = '00f46a539e425f5c8da4f1d89fcaa774' + response.fileDate;
        var sign_1 = crypto.createHash('md5').update(sign_).digest("hex");
        var url = 'https://aiapi.jd.com/jdai/ocr_universal_v2?appkey=b3dbe159a479916ede7581a2dd1f4be2&timestamp=' + response.fileDate + '&sign=' + sign_1;
        var requestData = { imageBase64Str: response.fileImg };
        httprequest(url, requestData);

        function httprequest(url, data) {
            request({
                url: url,
                method: "POST",
                json: true,
                headers: {
                    "content-type": response.fileType,
                },
                body: requestData
            }, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    // 请求成功的处理逻辑
                    res.json(body.result)
                }
            });
        };
    };
});