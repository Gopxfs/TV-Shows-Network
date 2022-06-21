import './assets/index.css';
import TVMaze from './modules/TVMazeAPI.js';

const tvMaze = new TVMaze();

const newShow = async (url) => {
  tvMaze.createShowLi(await tvMaze.getShowInfo(url));
};
for (let i = 1; i <= 6; i += 1) {
  newShow(`https://api.tvmaze.com/shows/${i}`);
}
