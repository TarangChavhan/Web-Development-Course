const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {

    let collectData = fs.readFileSync("html/header.html", 'utf-8');

    // Home Route
    if (req.url === "/") {

        fs.readFile("html/index.html", "utf-8", (error, data) => {

            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Internal Server Error");
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(collectData + data);
        });
    }

    // CSS Route
    else if (req.url === "/Style.css") {

        fs.readFile("html/Style.css", "utf-8", (error, data) => {

            if (error) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                return res.end("Internal Server Error");
            }

            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });
    }

    // Dynamic HTML Pages
    else {

        let filePath = "html" + req.url + ".html";

        fs.readFile(filePath, "utf-8", (error, data) => {

            if (error) {
                res.writeHead(404, { "Content-Type": "text/plain" });
                return res.end("Page Not Found");
            }

            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(collectData + data);
        });
    }

}).listen(3000, () => {
    console.log("Server running on port 3000");
});