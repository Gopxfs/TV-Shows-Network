import './assets/index.css';
import TVMaze from './modules/TVMazeAPI.js';
import Involvement from './modules/InvolvementAPI.js';

const tvMaze = new TVMaze();
const involvement = new Involvement();

const getLikes = async (id) => {
  const likesData = await involvement.getLikes();
  const show = likesData.find((show) => show.item_id === id);
  return show.likes;
};

const newShow = async (url, likes) => tvMaze.createShowLi(await tvMaze.getShowInfo(url), likes);

const populateShows = async () => {
  const likes = [];
  for (let i = 1; i <= 6; i += 1) {
    likes.push(getLikes(`${i}`));
  }
  Promise.all(likes)
    .then((results) => {
      for (let i = 1; i <= 6; i += 1) {
        newShow(`https://api.tvmaze.com/shows/${i}`, results[i - 1]);
      }
    });
};
populateShows();
