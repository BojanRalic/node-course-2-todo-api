let mongoose = require('mongoose');


// Creating a constructor.
let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedApp: {
        type: Number,
        default: null
    }
});


module.exports = {
    Todo: Todo
};


// let noviZadatak = new Todo({
//     text: '          Edit this video! '
// });
//
// noviZadatak.save().then(function (doc) {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, function (e) {
//     console.log('Novi zadatak nije prosao:', e);
// });
//
