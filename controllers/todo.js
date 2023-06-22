const Todo = require("../models/todo");

exports.getAllTodos = (req,res) =>{
    Todo.find()
    .then((todo)=> res.json())
    .catch((err)=> {
        res
        .status(404)
        .json({message: "Totos not found ", err: err.message})
    });
};

exports.postCreateTodo = (req,req) =>{
    Todo.create(req.body)
    .then((data) => res.json({ message: "Todo added successfully", data }))
    .catch((err) =>
        res
            .status(400)
            .json({ message: "Failed to add todo", error: err.message })
    );
};

exports.putUpdateTodo = (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
                .status(400)
                .json({ message: "Failed to update todo", error: err.message })
        );
};

exports.deleteTodo = (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "todo deleted successfully", data })
        )
        .catch((err) =>
            res
                .status(404)
                .json({ message: "book not found", error: err.message })
        );
};