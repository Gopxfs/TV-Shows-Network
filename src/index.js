import './assets/index.css';
import TVMaze from './modules/tvMazeAPI.js';
import Involvement from './modules/involvementAPI.js';

const involvement = new Involvement();
const tvMaze = new TVMaze(involvement);

const getLikes = async (id) => {
  const likesData = await involvement.getLikes();
  const show = likesData.find((show) => show.item_id === id);
  return show.likes;
};

const newShow = async (url) => tvMaze.createShowLi(await tvMaze.getShowInfo(url));

const populateShows = async () => {
  const showLi = [];
  const likes = [];
  for (let i = 1; i <= 6; i += 1) {
    showLi.push(newShow(`https://api.tvmaze.com/shows/${i}`));
    likes.push(getLikes(`${i}`));
  }
  Promise.all(likes)
    .then((results) => {
      for (let i = 1; i <= 6; i += 1) {
        tvMaze.updateLikeNumber(i, results[i - 1]);
      }
    });
};
populateShows();