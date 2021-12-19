const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    id: { type: String, default: null },
    name: { type: String, default: null },
    username: { type: String, default: null },
    password: { type: String },
    role: { type: String }
});

module.exports = mongoose.model('Usuarios', userSchema, 'usuarios');