let persons = [{
    name: "유재석",
    point: 78,
    city: "서울"
},
{
    name: "김종국",
    point: 92,
    city: "서울"
},
{
    name: "양세찬",
    point: 76,
    city: "제주"
},
{
    name: "하하",
    point: 76,
    city: "서울"
}
];


persons.sort(function(a,b){
    return a.point>b.point? -1: a.point<b.point? 1 : 0;
});