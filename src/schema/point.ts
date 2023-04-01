import Joi from "joi";

export const PointSchema = Joi.object({
  alias: Joi.string().required(),
  address: Joi.string().required(),
  visits: Joi.number().optional().default(0),
});
