import './assets/reset.css';
import './assets/index.css';
import './assets/popup.css';
import Logo from './assets/images/logo.png';
import TVMaze from './modules/TVMazeAPI.js';

const logoImg = document.querySelector('#logo');
logoImg.src = Logo;

const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
// const newAppUrl = `${baseUrl}apps/`;

// const appId = newApp(newAppUrl);
// appId.then(res => console.log(res));

const tvMaze = new TVMaze();

const newShow = async (url) => {
  tvMaze.createShowLi(await tvMaze.getShowInfo(url));
};
for (let i = 1; i <= 6; i += 1) {
  newShow(`https://api.tvmaze.com/shows/${i}`);
}
