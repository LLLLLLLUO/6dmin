const http = require('http');

const serve = http.createServer((req, res) => {
    if (req.url === '/api/list') {
        let jsonData = {
            code: 200,
            data: {
                list: [
                    {
                        id: 1,
                        name: 'jack'
                    }
                ]
            }
        };
        console.log(JSON.stringify(jsonData));
        // res.end(JSON.stringify(jsonData));
        res.end(jsonData);
    }
});

console.log(serve)

serve.listen(9999);