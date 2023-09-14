import { Router } from "express";
import musicController from "../controllers/music-controller";
import { musicSchema } from "../schema/schema";
import { validateSchema } from "../middleware/validateSchema";

const musicRouter = Router();

musicRouter.get("/musics", musicController.getMusics);
musicRouter.post(
  "/musics",
  validateSchema(musicSchema),
  musicController.createMusic
); // TODO: validação via Joi

export default musicRouter;
