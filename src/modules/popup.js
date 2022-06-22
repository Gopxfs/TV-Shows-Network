import Close from '../assets/images/delete.png';

const popup = (show) => {
  const popCont = document.querySelector('.popup-container');
  popCont.style.display = 'block';
  const genres = show.genres;
  let genresList = '';

  for (let i = 0; i < genres.length; i += 1) {
    if (i !== genres.length-1) {
      genresList += `${genres[i]}, `;
    } else {
      genresList += `${genres[i]}.`
    }
  }
  
  popCont.innerHTML =
  `<div class="popup-body">
    <img class="img-poster" src=${show.image.original}
    alt="Under the dome img">
    <button class="close-pop"><img class="close-img" src=${Close} alt="close button"></button>
    <h2 class="pop-title">${show.name}</h2>
    <div class="grid-info">
      <span>Country: ${show.network.country.name}</span>
      <span>Premiered: ${show.premiered}</span>
      <span>Genres: ${genresList}</span>
      <span>Rating: ${show.rating.average}</span>
    </div>      
    <div class="summary">${show.summary}</div>
  </div>`;

  const closePop = document.querySelector('.close-pop');
  closePop.addEventListener('click', closePopup);
}

function closePopup() {
  const popCont = document.querySelector('.popup-container');
  popCont.style.display = 'none';
}

export { popup };