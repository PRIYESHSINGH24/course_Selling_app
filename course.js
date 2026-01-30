function Createcourseroutes(app){
    app.post("/courses/purchase", function(req,res){
    res.json({
        message: "signup endpoint"
    })
})

app.get("/courses", function(req,res){
    res.json({
        message: "signup endpoint"
    })
})
}

module.exports = {
    Createcourseroutes : Createcourseroutes
}