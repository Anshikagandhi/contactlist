const express=require('express');
const path=require('path');
const port =8000;

const db=require('./config/mongoose');
const Contact=require('./module/contact');
const app = express();


app.set('view engine','ejs'); //setting a value for the property//stp1 
app.set('views', path.join(__dirname,'/views'));// step2
app.use(express.urlencoded({extended:true}));        // this is known as a middleware
app.use(express.static('assets'))
var contactList=[
{
    name: "Anshika",
    phone: "1111111111"
},
{
    name: "Nitin",
    phone: "123456789"
},
{
    name: "Riya",
    phone: "345672829"
}

]
app.get('/',function(req,res){

    Contact.find({},function(err,contacts){
        if(err){
            console.log('error in fetchinh contacts');
            return;
        }
        return res.render('home',
    {title:"my contacts list",
    contact_list: contacts  //creating a key

     }
    ); 

    });
});


    
    



app.get('/practice',function(req,res){
    return res.render('practice',{title:"Let us play with ejs"});

}
)
app.post('/create_contact',function(req,res){    // addition of a contact to a contact lsit
    // return res.redirect('/practice');   
     //redirect takes us to the url ..it is a controller
     //contactList.push({
       //  name: req.body.name,
        // phone: req.body.phone
     //});
     Contact.create({
         name: req.body.name,
         phone: req.body.phone
     },function(err,newcontact){
         if(err){
             console.log('error in creating a contact');
             return;
         }
         console.log('*********',newcontact);
         return res.redirect('back');
     }
     );
    
 });
  app.get('/deletecontact/',function(req,res){   // deletion of a contact from the contact list
      console.log(req.query); // get id by query parameters
      let id= req.query.id; // req.params is a object and known as string param
      //deleting using database
      //find the contact by id and delete
      Contact.findByIdAndDelete(id,function(err){
          if(err){
              console.log('error in deleting');
              return;
          }
          return res.redirect('back');

      });



      // let contactIndex= contactList.findIndex(contact => contact.phone==phone);

       //if(contactIndex!= -1){
       //    contactList.splice(contactIndex,1);
      // }

     
      
  });

app.listen(port,function(err){
 if(err)
 {
     console.log('Error is running', err);
 }
 console.log('my server is running on port',port);
}
)