const express = require("express");
const app = express();
let posts = []; //게시글 리스트

app.use(express.json()); //JSON 미들웨어 활성화

app.use(express.urlencoded({ extended: true})); //키-값 조합 형태를 가진 경우 파싱

app.get("/", (req, res) => {
 res.json(posts); //게시글 리스트를 json 형태로 보여줌. 
});

app.post("/posts", (req,res) => { //POST 요청이 오는 경우 콜백함수 실행
    const { title, name, text} = req.body;

    posts.push({ id: posts.length+1, title, name, text, createdDt: Date()});
    res.json({ title, name, text});
});

app.delete("/posts/:id", (req, res) => {
    const id = req.params.id; //parms: url 매개변수를 나타냄. /posts/123으로 요청이 오면 req.params.id는 123이 된다.
    const filteredPosts = posts.filter((post) => post.id !== +id); 
    //글 삭제 로직 (post.id와 같지 않은 경우만 선택하여 filteredPost 배열에 저장. +id는 숫자로 변환 > 배열에서 id가 숫자이기 때문에 일치성 확인)
    const isLengthChanged = posts.length !== filteredPosts.length;; //삭제 확인
    posts = filteredPosts;
    if(isLengthChanged){
        res.json("OK");
        return;
    } 
    res.json("NOT CHANGED"); //변경되지 않음.
});
app.listen("3000",() => {
    console.log("welcome posts START!");
});