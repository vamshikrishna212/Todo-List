const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const TodoModel = require("./models/todo")

const app = express();
app.use(cors())
app.use(express.json())


app.listen(6500, () => {
    console.log("server is  running")
})

mongoose.connect("mongodb://127.0.0.1:27017/todoproject")

app.post("/add", (req, res) => {
    const todo = req.body.todo;
    TodoModel.create({
        "todo": todo
    }).then(result => {
        console.log(result);
        res.status(201).json(result);
    })
        .catch(err => console.log(err)
        );

});

app.get("/getdata", (req, res) => {
    TodoModel.find()
        .then(result => {
            res.status(202).json(result)
                , console.log(result)
        })
        .catch(err => console.log(err))
})

app.delete("/:id", (req, res) => {
    const id = req.params.id;

    console.log(id)
    TodoModel.findByIdAndDelete(id)
        .then(() => {

            res.status(204).send();
        })
        .catch(err => {

            res.status(500).send("Error deleting the task");
        });
})