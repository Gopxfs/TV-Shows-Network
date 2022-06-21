import './assets/index.css';
import TVMaze from './modules/TVMazeAPI.js';
import Involvement from './modules/InvolvementAPI';

const tvMaze = new TVMaze ();
const involvement = new Involvement();

const getLikes = async (id) => {
const likesData = await involvement.getLikes();
const show = likesData.find(show => show.item_id === id);
return show.likes;
};

const newShow = async (url, likes) => {
  tvMaze.createShowLi(await tvMaze.getShowInfo(url), likes);
  };

const populateShows = async() => {
  for (let i = 1; i <= 6; i += 1) {
    await newShow(`https://api.tvmaze.com/shows/${i}`, await getLikes(`${i}`));
  }
}
populateShows();
