import db from "../database/connection.database";
import { CreateGame, Game, GetGames } from "../protocols/game-protocol";

async function getGames() {
  const games = await db.query<Game>(`SELECT * FROM games;`);
  return games.rows;
}

function createGame(game: CreateGame) {
  const { title, platform } = game;
  return db.query(`INSERT INTO games (title, platform) VALUES ($1, $2);`, [
    title,
    platform,
  ]);
}

async function getGameByTitleAndPlatform(game: CreateGame) {
  const { title, platform } = game;
  const result = await db.query<GetGames>(
    `
  SELECT * FROM games WHERE title = $1 AND platform = $2;
  `,
    [title, platform]
  );
  return result.rowCount;
}

const gamesRepository = {
  getGames,
  getGameByTitleAndPlatform,
  createGame,
};

export default gamesRepository;
