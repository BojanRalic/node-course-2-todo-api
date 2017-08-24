let mongoose = require('mongoose');


let User = mongoose.model('Users', {
    email: {
        trim: true,
        type: String,
        minlength: 1,
        required: true
    }
});

module.exports = {
    User: User
};


// let newUser = new User({
//     email: '  ralic.net@gmail.com '
// });
//
// newUser.save().then(function (doc) {
//     console.log(JSON.stringify(doc, undefined, 2));
// }, function (e) {
//     console.log('New User error', e)
// });

