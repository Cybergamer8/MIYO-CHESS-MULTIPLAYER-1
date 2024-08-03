// Load necessary modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Define the path to your index.html file
const indexPath = path.join(__dirname, 'index.html');

// Create a server
const server = http.createServer((req, res) => {
    // Read the index.html file
    fs.readFile(indexPath, (err, data) => {
        if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
        }

        // Set the content type and send the contents of index.html
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

// Define the port number
const port = 3000;

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});