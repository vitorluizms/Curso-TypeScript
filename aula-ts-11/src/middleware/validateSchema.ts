import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";
import { CreateGame } from "protocols/game-protocol";

export function validateSchema<T>(schema: ObjectSchema) {
  return (req: Request, res: Response, next: NextFunction) => {
    const validate = schema.validate(req.body as T, {
      abortEarly: false,
    });

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
