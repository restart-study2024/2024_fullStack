const express = require("express");
const app = express(); //express 초기화 후 app에 할당.

const port = 3000;

app.get("/", (req, res) => {
    res.set({ "Content-Type": "text/html; charset=utf-8"});
    res.end("헬로 express");
});

app.listen(port, () => {
    console.log(`START SERVER : user ${port}`);
});