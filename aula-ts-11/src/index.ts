import express, { Request, Response, json } from "express";
import { Game, CreateGame, GetGames } from "./protocols/game-protocol";
import gamesService from "./service/games-service";
import httpStatus from "http-status";
import { validateSchema } from "./middleware/validateSchema";
import { gameSchema } from "./schemas/schema";

const app = express();
app.use(json());

app.post(
  "/games",
  validateSchema<CreateGame>(gameSchema),
  async (req: Request, res: Response) => {
    const body = req.body as CreateGame;
    try {
      await gamesService.createGame(body);
      res.sendStatus(httpStatus.CREATED);
    } catch (error) {
      console.log(error);
      res.sendStatus(httpStatus.CONFLICT);
    }
  }
);

app.get("/games", async (req: Request, res: Response) => {
  const games = await gamesService.getGames();
  res.send(games);
});

app.listen(5000, () => console.log(`Server is up and running or port 5000`));
