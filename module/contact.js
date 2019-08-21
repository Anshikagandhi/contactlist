const mongoose=require('mongoose');

// create a schema
 const ContactSchema=new mongoose.Schema({
     name: {
         type: String,
         required: true
     },
     phone: {
         type: String,
         required: true
     }
 });

 const Contact= mongoose.model('Contact',ContactSchema);
 module.exports=Contact;