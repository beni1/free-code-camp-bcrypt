'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
const bcrypt      = require('bcrypt');
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
    res.send('hello world');
  });

//START_ASYNC -do not remove notes, place code between correct pair of notes.
//const hash = bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
 //   console.log(hash);

// Because of Sync hash below remove the "const hash" in statement above
    bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    console.log(hash);
    bcrypt.compare(myPlaintextPassword, hash, (err, res) => {
        /*res == true or false*/
        console.log(res)    
      });
});
 //Output result for async :
 //$2b$12$G2QnDuJfKu15QAqQZGehMOqcEJtjD/W0kqMpopMlQpBJzlGiSVl1W
//true 

//END_ASYNC

//START_SYNC

var hash = bcrypt.hashSync(myPlaintextPassword, saltRounds);
console.log(hash)

var result = bcrypt.compareSync(myPlaintextPassword, hash);
console.log(result)


//END_SYNC





























const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Listening on port:", PORT)
});
