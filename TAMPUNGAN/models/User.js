var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const { hashingPassword }  = require('../helpers//passord')
var UserSchema = new Schema({
  username : {
      type : String,
      required : true,
      validate : {
        validator : function(){
            return new Promise((resolve,reject)=>{
                User.findOne({ username : this.username })
                .then(user=>{
                    if(user){
                        resolve(false)
                    }else {
                        resolve(true)
                    }
                })
            })
        },
        message : 'username must be unique'
      }
  },
  password : {
      type : String,
      required : true
  },
  email : {
      type : String,
      required : true,
      match :  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ , 'email invalid'],
      validate : {
        validator : function(){
            return new Promise((resolve,reject)=>{
                User.findOne({ email : this.email })
                .then(user=>{
                    if(user){
                        resolve(false)
                    }else {
                        resolve(true)
                    }
                })
            })
        },
        message : 'email must be unique'
      }
  }
});
UserSchema.pre('save' , function(next){
    this.password = hashingPassword(this.password)
    console.log(this.password)
    next()
})
let User = mongoose.model('User' , UserSchema)


module.exports = User