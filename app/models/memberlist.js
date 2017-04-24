var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

// Thanks to http://blog.matoski.com/articles/jwt-express-node-mongoose/

// set up a mongoose model
var MembersSchema = new Schema({
  name: {
        type: String,
        required: true
    },
  father_name: {
        type: String,
        required:true
  },
  address: {
        type: String,
        required:true
  },
  phone_no: {
        type: Number
  },
  date: {
        type: Date,
        default: Date.now
 },
  plan: {
    type: String
  }
});


module.exports = mongoose.model('Members', MembersSchema);
