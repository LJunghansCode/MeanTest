var mongoose = require('mongoose')

var surveySchema = mongoose.Schema({
	author: {type:String},
	question: {type:String, required: true},
	option1: {option:{type:String, required:true},votes:{type:Number, default:0}},
	option2: {option:{type:String, required:true},votes:{type:Number, default:0}},
	option3: {option:{type:String, required:true},votes:{type:Number, default:0}},
	option4: {option:{type:String, required:true},votes:{type:Number, default:0}},
	date: {type:Date, default:Date()},
	
})

mongoose.model('Survey', surveySchema)