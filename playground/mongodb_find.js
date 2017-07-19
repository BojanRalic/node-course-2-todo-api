// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', function (err, db) {
    if (err) {
        return console.log('Unable to connect to MongoDB server.');
    }
    console.log('Connected to MongoDB server');


    // db.collection('Todos').find({
    //     _id: new ObjectID("596cb8bd920bc712a13df62a")
    // }).toArray().then(function (docs) {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, function (err) {
    //     console.log('Unable to fetch todos', err);
    // });


    // db.collection('Todos').find().count().then(function (count) {
    //     console.log(`Todos count: ${count}`);
    // }, function (err) {
    //     console.log('Unable to fetch todos', err);
    // });


    db
        .collection('Users')
        .find({name: 'Bojan'})
        .count()
        .then(function (count) {
            console.log(`Number of users is ${count}`);
        }, function (err) {
            console.log('Count has failed.', err);
        });

    db
        .collection('Users')
        .find({name: 'Bojan'})
        .toArray()
        .then(function (docs) {
            console.log(JSON.stringify(docs, undefined, 2))
        }, function (err) {
            consol.log('Users fetch failed.', err);
        });


    db.close();
});


