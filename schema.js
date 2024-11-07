// for server side validation 
// joi identify errors from server side which are missing
const joi=require('joi');

module.exports.listingSchema = joi.object({
    listing : joi.object({
        title: joi.string().required(),
        description: joi.string().required(),
        location: joi.string().required(),
        country: joi.string().required(),
        price: joi.number().required().min(50),
        image: joi.string().allow("", null)

    }).required()
})