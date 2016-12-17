var mongoose = require('mongoose');
var User = mongoose.model('User')

module.exports = (function(){
	return{
		login : function(req, res){
			User.findOne({name : req.body.name},function(err, data){
				if(!data){
					var userInstance = new User(req.body)
					userInstance.save(function(err){
						if(!err){
						req.session.user = userInstance;
						req.session.save();
						res.json({saved:true, session:req.session.user})
						}else{
							console.log(err)
						}

					});
				}else{
					req.session.user = data;
					req.session.save()
					res.json({saved:true, session:req.session.user})
				}
			})
		},
        getCurUser: function(req, res){
            if(!req.session.user || req.session.user == null){
                res.send(null)
            }else{
                res.json({session: req.session.user})
            }
        },
        logOut: function(req, res){
            req.session.destroy()
            res.redirect('/')
        }

	}
})();