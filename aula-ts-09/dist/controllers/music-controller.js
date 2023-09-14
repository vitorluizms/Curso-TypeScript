"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var music_service_1 = __importDefault(require("../services/music-service"));
function getMusics(req, res) {
    var musics = music_service_1.default.getMusics();
    res.send(musics);
}
function createMusic(req, res) {
    var music = req.body; // TODO Asserção do tipo
    music_service_1.default.createMusic(music);
    res.sendStatus(201);
}
var musicController = {
    getMusics: getMusics,
    createMusic: createMusic,
};
exports.default = musicController;
