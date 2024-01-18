const http = require("http");
const url = require("url");

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");

    if(path in urlMap){
        url.urlMap[path](req, res); // urlMap[user] 을 입력하면 user가 반환되므로 user(req, res)가 됨.
    } else{
        notFount(res, req);
    }
})
.listen("3002",() => console.log("라우터 실행"));

const user = (req, res) => {
    res.end(``);
}
const feed = (req, res) => {
    res.end(`<ul>
    <li>picture1</li>
    <li>picture2</li>
    <li>picture2</li>
    </ul>`)
}
const notFount = (req, res) => {
    statusCode =404;
    res.end(" 404 page not found ")
}

const urlMap ={
    "/": (req, res) => res.end("HOME"),
    "/user":user,
    "/feed":feed
};