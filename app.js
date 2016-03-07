var fs = require("fs");
var crypto = require("crypto");
var filename = process.argv[2];
fs.readFile(filename,function(err,data) {
	var s = data.toString().replace(/\r\n/g,"\n");
	console.log(crypto.createHash("sha1").update("blob " + s.length + "\0" + s).digest("hex"));
});