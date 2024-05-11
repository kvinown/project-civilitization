var http = require("http");
var fileSys = require("fs");
var url = require("url");

var server = http.createServer(function (req, res) {
	let q = url.parse(req.url, true);
	let path = q.query;
	let fileLocation;
	switch (path.menu) {
		case "/":
			fileLocation = "pages/content1.html";
			break;
		case "content1": // Menangani permintaan untuk content1
			fileLocation = "pages/content1.html"; // Nama file konten
			break;
		case "content2": // Menangani permintaan untuk content2
			fileLocation = "pages/content2.html"; // Nama file konten
			break;
		default:
			fileLocation = "";
			break;
	}
	fileSys.readFile(fileLocation, (err, data) => {
		if (err) {
			res.writeHead(404, { "Content-type": "text/html" });
			return res.end("404 not found");
		}
		res.writeHead(200, { "Content-type": "text/html" });
		res.write(data);
		return res.end();
	});
});

server.listen(8888);
