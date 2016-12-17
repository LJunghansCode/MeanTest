var mongoose = require('mongoose');
var Survey = mongoose.model('Survey')

module.exports = (function(){
	return{
		new_survey : function(req, res){
			var surveyInstance = new Survey(req.body)
			surveyInstance.author = req.session.user.name;
			surveyInstance.save(function(err){
				if(err){
					console.log(err)
				}else{
					res.json({added: true})
				}
			});
		},
		all_surveys : function(req, res){
			Survey.find({}, function(err, surveys){
				if(err){
					console.log(err)
				}else{
					res.json({surveys: surveys})
				}
			})
		},
		one_survey : function(req, res){
			Survey.findOne({_id : req.params.id}, function(err, survey){
				res.json({survey:survey})
			})
		},
		delete_survey : function(req, res){
			Survey.findOne({_id : req.params.id}, function(err, survey){
				var surveyInstance = survey
				surveyInstance.remove()
				res.redirect('/')
				})
			},
		vote1 : function(req, res){
			Survey.findOne({_id : req.params.id}, function(err, survey){
				var surveyInstance = survey
				surveyInstance.option1.votes+=1;
				surveyInstance.save();
				res.json({voted:true})

			})

		},
		vote2 : function(req, res){
			Survey.findOne({_id : req.params.id}, function(err, survey){
				var surveyInstance = survey
				surveyInstance.option2.votes+=1;
				surveyInstance.save();
				res.json({voted:true})

			})

		},
		vote3 : function(req, res){
			Survey.findOne({_id : req.params.id}, function(err, survey){
				var surveyInstance = survey
				surveyInstance.option3.votes+=1;
				surveyInstance.save();
				res.json({voted:true})

			})

		},
		vote4 : function(req, res){
			Survey.findOne({_id : req.params.id}, function(err, survey){
				var surveyInstance = survey
				surveyInstance.option4.votes+=1;
				surveyInstance.save();
				res.json({voted:true})

			})

		}
	}
})();