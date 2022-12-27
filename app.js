const express = require("express");
const bodyParser = require("body-parser");
const dateModule = require(__dirname + "/date")

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))

const tasks = [];
const workTasks = [];


app.get("/", (req, res) => {
    
    const curr_date = dateModule.fullDate();
    
    res.render("list", {listName: curr_date, tasks: tasks});
})

app.post("/", (req, res) => {
    if(req.body.currList === "Work To-Do"){
        const task = req.body.varTask;
        workTasks.push(task);
        res.redirect("/work")
    }
    else{
    const task = req.body.varTask;
    tasks.push(task);
    res.redirect("/")
    }
})


app.get("/work", (req, res) => {
    res.render("list", {listName: "Work To-Do", tasks: workTasks})
})

app.get("/about", (req, res) => {
    res.render("about");
}
)

app.listen(3000, () => {
    console.log("Listening on Port 3000.");
})