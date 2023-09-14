"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var musics = [];
function getMusics() {
    return musics;
}
function createMusic(music) {
    musics.push(music);
}
var musicService = {
    getMusics: getMusics,
    createMusic: createMusic
};
exports.default = musicService;
