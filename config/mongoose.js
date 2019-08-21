const mongoose= require('mongoose'); //require the library

mongoose.connect('mongodb://localhost/contacts_list_db');  //this is how mongoose will be connectd to database

const db=mongoose.connection;  // acquire the connection(to check if it is successful)

db.on('error',console.error.bind(console,'error connecting to db')); // if error

db.once('open',function(){
 console.log('successfully connnected to database');
});