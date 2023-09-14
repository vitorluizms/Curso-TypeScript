import gamesRepository from "../repository/games-repository";
import { Game, CreateGame } from "./../protocols/game-protocol";

async function getGames() {
  return await gamesRepository.getGames();
}

async function createGame(game: CreateGame) {
  if ((await gameAlreadyExists(game))) {
    throw { message: "Game already exists" };
  }

  await gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: CreateGame): Promise<boolean> {
  const result = await gamesRepository.getGameByTitleAndPlatform(game);
  return result > 0 ? true : false;
}

const gamesService = {
  getGames,
  createGame,
};

export default gamesService;
