import Joi, * as joi from 'joi';

export const JoiValidationSchema = joi.object({
    PORT: joi.number().default(3005) ,
    DEFAULT_LIMIT: joi.number().default(6),
    MONGODB: joi.required(),
})