import Close from '../assets/images/delete.png';
import { sendComment } from './api_comments.js';
import refresh from './refresh.js';

function closePopup() {
  const body = document.body;
  body.classList.remove('hide-scroll');
  const popCont = document.querySelector('.popup-container');
  popCont.style.display = 'none';
}

const popup = (show) => {
  const body = document.body;
  body.classList.add('hide-scroll');
  const popCont = document.querySelector('.popup-container');
  popCont.style.display = 'block';
  let genresList = '';

  for (let i = 0; i < show.genres.length; i += 1) {
    if (i !== show.genres.length - 1) {
      genresList += `${show.genres[i]}, `;
    } else {
      genresList += `${show.genres[i]}.`;
    }
  }

  popCont.innerHTML = `<div class="popup-body">                        
                        <button class="close-pop"><img class="close-img" src=${Close} alt="close button"></button>
                        <div class="info-cont">
                          <img class="img-poster" src=${show.image.original} alt="Under the dome img">
                          <div class="info-movie">
                            <h2 class="pop-title">${show.name}</h2>
                            <div class="grid-info">
                              <span>Country: ${show.network.country.name}</span>
                              <span>Premiered: ${show.premiered}</span>
                              <span>Genres: ${genresList}</span>
                              <span>Rating: ${show.rating.average}</span>
                            </div>      
                            <div class="summary">${show.summary}</div>                        
                          </div>
                        </div>
                        <h3 id="com${show.id}" class="subtitle"></h3>
                        <ul class="comment-list"></ul>
                        <h3 class="subtitle">Add a comment</h3>
                        <form>
                          <input id="user-name" class="input-data" type="text" placeholder="Your name" required>
                          <textarea id="comment-area" class="input-data" rows="5" cols="30" placeholder="Your insights" required></textarea>
                          <input id="submit" class="sub-btn" type="submit" value="Comment" title="Click this or press enter to submit">            
                        </form>
                      </div>`;

  const closePop = document.querySelector('.close-pop');
  closePop.addEventListener('click', closePopup);

  const baseLink = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
  const appId = 'wWiBGZy0Ro0ezfkPSzh8';
  const commentLink = `${baseLink}${appId}/comments`;
  const retrievingLink = `${commentLink}?item_id=item${show.id}`;

  const userName = document.querySelector('#user-name');
  const userComment = document.querySelector('#comment-area');
  const form = document.querySelector('form');

  refresh(retrievingLink, show.id);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newComment = sendComment(userName.value, userComment.value, commentLink, show.id);
    newComment.then(() => {
      refresh(retrievingLink, show.id);
    });
    e.target.reset();
  });
};

export { popup as default };