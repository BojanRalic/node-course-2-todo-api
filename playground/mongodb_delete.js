// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, db) {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');


    // delete many
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(function (result) {
    //     console.log(result);
    // });

    // delete one
    // db.collection('Todos').deleteOne({text: 'Eat lonch'}).then(function (result) {
    //     console.log(result);
    // });

    // find one and delete
    // db.collection('Todos').findOneAndDelete({completed: false}).then(function (result) {
    //     console.log(result);
    // });


    // db.collection('Users').deleteMany({name: 'Bojan'}).then(function (result) {
    //     console.log(result);
    // });

    db
        .collection('Users')
        .findOneAndDelete({
        _id: new ObjectID('596caffbf6c37d10086ac37e')
    })
        .then(function (result) {
        console.log(result);
    });


    db.close();
});


