const http = require('http');
const fs = require("fs");


const hostname = '127.0.0.1'; // localhost
const port = 3000;

const url = 'mongodb://localhost:27017'; // für lokale MongoDB
const mongoClient = new mongodb.MongoClient(url);

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    'Content-Type': 'application/json'
};

async function startServer() {
    // connect to database
    await mongoClient.connect();
    // listen for requests
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}



const server = http.createServer(async (request, response) => {
    response.statusCode = 200;
    response.setHeader('Access-Control-Allow-Origin', '*'); // bei CORS Fehler
    let url = new URL(request.url || '', `http://${request.headers.host}`);
    switch (url.pathname) {
      case '/category': {
        const productsCollection = mongoClient.db('products').collection('allproducts');
        switch (request.method) {
          case 'GET':
            let result;
            if(url.searchParams.get('category')){
              result = await productsCollection.find({
                category: String(url.searchParams.get('category')),
              });
            }
            else {
              result = await productsCollection.find({});
            }
            response.setHeader('Content-Type', 'application/json');
            response.write(JSON.stringify(result.toArray()));
            break;
          case 'POST':
            let jsonString = '';
            request.on('data', data => {
              jsonString += data;
            });
            request.on('end', async () => {
              productsCollection.insertOne(JSON.parse(jsonString));
            });
            break;
        }
        break;
      }
      case '/clearAll':
        await mongoClient.db('products').collection('allproducts').drop();
        break;
      default:
        response.statusCode = 404;
    }
    response.end();
}
);






//     if (request.method === 'OPTIONS') {
//         response.writeHead(204, headers);
//         response.end();
//         return;
//     }
//     if (request.method === 'POST') {
//         let jsonString = '';
//         request.on('data', (data) => {
//             jsonString += data;
//         });
//         request.on('end', () => {
//             console.log(JSON.parse(jsonString));
//             //fs.writeFile( "savedShoppingLists.json", jsonString, "utf8", );
//             fs.writeFile('savedShoppingLists.json', jsonString, "utf8", err => {
//                 if (err) {
//                     console.error(err);
//                 } else {
//                     console.info("JSON saved successfully!");
//                 }
//             });
//         });
//         return;
//     }
//     if (request.method === 'GET') {
//         fs.readFile('savedShoppingLists.json', 'utf8', (err, data) => {
//             if (err) {
//                 throw err;
//             }
//             response.writeHead(200, headers);
//             response.write(data);
//             response.end();
//         });

//     }


// });

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

async function addProduct(url, jsonString) {
    const response = await fetch(url, {
      method: 'post',
      body: jsonString,
    });
  }
  
  async function getProducts(category) {
    const response = await fetch(
      `http://localhost:3000/student?studentNr=${category}`
    );
    const text = await response.text();
    console.log(JSON.parse(text));
  }
  
  async function getAllProducts(): Promise<void> {
    const response = await fetch('http://localhost:3000/allproducts');
    const text = await response.text();
    console.log(JSON.parse(text));
  }