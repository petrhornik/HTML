// Soubor pro ukládání JOI validačních schémat

const Joi = require("joi");

// definování joi schématu pro validaci
module.exports.campgroundSchema = Joi.object({
  // v mém případě definuju 2 Joi objekty -> samotné req.body a potom skupinu campground uvnitř req.body
  // musím určit celý objekt campground do kterého se mi v req.body slučují prvky -> reqbody.campground

  campground: Joi.object({
    title: Joi.string().required(),
    price: Joi.number().required().min(0),
    location: Joi.string().required(),
    image: Joi.string().required(),
    description: Joi.string().required(),
  }).required(),
});

// další schémata SOON...