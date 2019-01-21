var http = require('http') 
var path = require('path')
var url = require('url')
var fs = require('fs')

function  staticRoot(staticPath,req,res){
  console.log(staticPath)

  console.log(req.url)
  var pathObj = url.parse(req.url,true)
  console.log(pathObj)

  var filePath = path.join(staticPath,pathObj.pathname)

  fs.readFile(filePath,'binary',function(err,fileContent){
    if(err){
      console.log('404')
      res.writeHead(404,'not found')
      res.end('<h1>404 Not Found</h1>')
    } else {
      console.log('ok')
      res.writeHead(200,ok)
      res.write(fileContent, 'binary')
      res.end()
    }
  })
}

console.log(path.join(__dirname,'static'))
var server = http.createServer(function(req,res){
staticRoot(path.join(__dirname,'static'),req,res)
})
server.listen(8080)
console.log('visit http://localhost:8080')

