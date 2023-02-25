const mongoose = require('mongoose');
mongoose.set('strictQuery', false)
const connect = async () =>  {
    await mongoose.connect("mongodb+srv://Pradyumna:Pradyumna@cluster0.qxvv1hh.mongodb.net/?retryWrites=true&w=majority")
    console.log("connected to database");
}

module.exports = connect;
