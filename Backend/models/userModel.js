const { Schema, model } = require('mongoose');

const mySchema = new Schema({
    name: String,
    email: String,
    password: String,
    age: Number,
    avatar: String
});

module.exports = model('User', mySchema);