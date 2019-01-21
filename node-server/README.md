```
var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')
```
`require` 分别获取上面不同的模块
`fs`读取信息，写入信息
`url`读取解析url，可以避免使用正则来匹
function staticRoot(staticPath, req, res)
`req`请求的相关信息
`res`响应的相关信息

```
console.log(req.url)
var pathObj = url.parse(req.url,true)
console.log(pathObj)
```
`parse`解析得到准确无误的`url`

`__dirname`当前index.js执行所在的文件