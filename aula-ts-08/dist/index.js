var game = {
    id: 1,
    platform: {
        id: 1,
        name: "Playstation",
    },
    title: "The Last of Us",
    publisher: "Naughty Dog",
    launch: "2013-06-14", // pode ser um Date. também pode ser vazio
};
var games = [game];
function play(game) {
    // runs the game
    console.log(game);
}
play(game);
