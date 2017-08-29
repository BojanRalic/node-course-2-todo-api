const {ObjectId} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// let id = '599eeade17fe9833ec92059d11';
//
//
// if (!ObjectId.isValid(id)) {
//     console.log('------ ID not valid ------');
// }
//
// Todo.find({
//     _id: id
// }).then(function (todos) {
//     console.log('1: Todos', todos);
// });
//
//
// Todo.findOne({
//     _id: id
// }).then(function (todo) {
//     console.log('2: Todo', todo);
// });
//
//
// Todo.findById(id).then(function (todo) {
//     if (!todo) {
//         return console.log('ID not found');
//     }
//     console.log('3: Todo by ID', todo);
// }).catch(function (e) {
//     console.log(e);
// });


let user_id = '599d52a695f7f9265037d014';

User.findById(user_id).then(function (user) {
    if (!user) {
        return '---------- There are no users ----------';
    }
    console.log('---------- Search by ID', JSON.stringify(user, undefined, 2));
}).catch(function (e) {
    console.log('---------- Error:', e);
});

