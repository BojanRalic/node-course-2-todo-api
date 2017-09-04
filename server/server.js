let express = require('express');
let bodyParser = require('body-parser');


let {ObjectId} = require('mongodb');


let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');


let app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', function (req, res) {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save().then(function (doc) {
        res.send(doc);
    }, function (e) {
        res.status(400).send(e);
    });
});


app.get('/todos', function (req, res) {
    Todo.find().then(function (todos) {
        res.send({todos});
    }, function (e) {
        res.status(400).send(e);
    });
});


// GET /todos/123123
app.get('/todos/:id', function (req, res) {
    let id = req.params.id;

    // Validate ID
    if (!ObjectId.isValid(id)) {
        // 404 - send back empty send
        return res.status(404).send('ID format is not valid.');
    }

    // find by id
    Todo.findById(id).then(function (todo) {
        // success

        if (!todo) {
            // if no todo - send back 404 with empty body
            return res.status(404).send('Wrong ID');
        }
        // if todo - send it back
        res.send({todo});

    }).catch(function (e) {
        // error
        // 400 - and send empty body back
        res.status(400).send(e);
    });


});


app.listen(port, function () {
    console.log(`Started up at port ${port}`);
});


module.exports = {app};