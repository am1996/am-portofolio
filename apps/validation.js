let Joi = require("joi");

var contactSchema = Joi.object().keys({
	fullname: Joi.string().required(),
	email: Joi.string().email().required(),
	msg : Joi.string().required()
});

module.exports = {
	validateContact:(content,config)=>{
		return Joi.validate(content,contactSchema)
	}
}