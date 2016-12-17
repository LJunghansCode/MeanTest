var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
	name: {type:String, unique:true}
})
mongoose.model('User', userSchema)