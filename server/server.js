const http = require('http');
const fs = require("fs");


const hostname = '127.0.0.1'; // localhost
const port = 3000;

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    'Content-Type': 'application/json'
};

const server = http.createServer((request, response) => {
    if(request.method === 'OPTIONS'){
        response.writeHead(204, headers);
        response.end();
        return;
    }
    if (request.method === 'POST') {
        let jsonString = '';
        request.on('data', (data) => {
            jsonString += data;
        });
        request.on('end', () => {
            console.log(JSON.parse(jsonString));
            //fs.writeFile( "savedShoppingLists.json", jsonString, "utf8", );
            fs.writeFile('savedShoppingLists.json', jsonString, "utf8", err => {
                if (err) {
                    console.error(err);
                } else {
                    console.info("JSON saved successfully!")
                }
            });
        });
        return;
    }
    if (request.method === 'GET') {
        fs.readFile('savedShoppingLists.json', 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            response.writeHead(200, headers);
            response.write(data);
            response.end();
        });

    }


});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});