const http = require("http");
let count = 0; 

const server = createServer((req, res) => {
    log(count);
    res.statusCode= 200;
    res.setHeadter("Content-Type", "text/plain"); // 텍스트를 평문으로 해석 
    res.write("hello\n");
    setTimeout(()=> {
        res.end("Node.js");
    },2000);
});

function log(count){
    console.log((count+=1));
}

server.listen(8000, () => console,log("Hello Node.js"));
