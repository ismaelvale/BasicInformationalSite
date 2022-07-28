const http = require ('http');
const fs = require ('fs');
const path = require('path');

const port = process.env.PORT || 8080

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
            fs.readFile(path.join(__dirname,'index.html'), buildDisplay(res, 200));
        break;
    case '/about':
        fs.readFile(path.join(__dirname,'about.html'), buildDisplay(res, 200));
        break;
    case '/contact-me':
        fs.readFile(path.join(__dirname,'contact-me.html'), buildDisplay(res, 200));
        break;
    default:
        fs.readFile(path.join(__dirname,'404.html'), buildDisplay(res, 404));
        break;
    };
});

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
});

function buildDisplay(res, statusCode) {
    return function display (err, content) {
        if (err) throw err;
        res.statusCode = statusCode;
        res.setHeader('Content-Type', 'text/html');
        res.end(content);
    };
};

