import { NextFunction, Request, Response } from "express";
import { Music } from "../protocols";
import { ObjectSchema } from "joi";

export function validateSchema(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validate = schema.validate(req.body as Music, { abortEarly: false });

    if (validate.error) {
      let errors = "";
      validate.error.details.forEach((detail, index) => {
        if (index !== validate.error.details.length - 1)
          errors += `${detail.message}\n`;
        else errors += detail.message;
      });
      return res.status(422).send(errors);
    }

    next();
  };
}
