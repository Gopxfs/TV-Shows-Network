import './assets/index.css';
import TVMaze from './modules/TVMazeAPI.js';
import Involvement from './modules/InvolvementAPI';

const tvMaze = new TVMaze ();
const involvement = new Involvement();

const newShow = async (url) => {
tvMaze.createShowLi(await tvMaze.getShowInfo(url));
};
for (let i = 1; i <= 6; i += 1) {
  newShow(`https://api.tvmaze.com/shows/${i}`)
}

const getLikes = async (id) => {
const likes = await involvement.getLikes();
console.log(likes.find(show => show.item_id === id));
};
getLikes('6');
