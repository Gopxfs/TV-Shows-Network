import './assets/index.css';
import Logo from './assets/images/logo.png';
import TVMaze from './modules/tvMazeAPI.js';
import Involvement from './modules/involvementAPI.js';

const logoImg = document.querySelector('#logo');
logoImg.src = Logo;

const involvement = new Involvement();
const tvMaze = new TVMaze(involvement);
const displayShowQuantity = document.getElementById('displayShowQuantity');
let howManyShows = 0;

const getLikes = (id, likesData) => {
  const show = likesData.find((show) => show.item_id === id);
  if (show) return show.likes;
  return 0;
};

const newShow = async (url) => tvMaze.createShowLi(await tvMaze.getShowInfo(url));

const showCounter = () => {
  howManyShows += 1;
};

const populateShows = async () => {
  const data = await involvement.getLikes();
  const showLi = [];
  const likes = [];
  for (let i = 1; i <= 101; i += 1) {
    showLi.push(newShow(`https://api.tvmaze.com/shows/${i}`));
    likes.push(getLikes(`${i}`, data));
  }
  Promise.all(showLi)
    .then((results) => {
      for (let i = 1; i <= 101; i += 1) {
        if (results[i - 1]) {
          showCounter();
          tvMaze.updateLikeNumber(i, likes[i - 1]);
        }
      }
      displayShowQuantity.innerHTML += `(${howManyShows})`;
    });
};
populateShows();