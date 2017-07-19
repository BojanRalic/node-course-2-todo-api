// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, db) {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');

    // find one and update
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('596f517ff9c8748dc688496d')
    // }, {
    //     $set: {
    //         completed: true,
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(function (result) {
    //     console.log(result);
    // });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('596cadfd74c739202c22c1d8')
    }, {
        $set: {
            name: 'Irena'
        },
        $inc: {
            age: 4
        },
    }, {
        returnOriginal: false
    }).then(function (result) {
        console.log(result);
    });

    db.close();
});


