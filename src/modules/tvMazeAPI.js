import popup from './popup.js';

class TVMaze {
  constructor(involvement) {
    this.involvement = involvement;
  }

  createShowLi = (show) => {
    if (show.name !== 'Not Found') {
      const homepageUl = document.getElementById('showList');
      const showLi = document.createElement('li');
      const showImg = document.createElement('img');
      const showTitle = document.createElement('h2');
      const showLike = document.createElement('button');
      const showLikes = document.createElement('p');
      const showComments = document.createElement('button');
      showImg.setAttribute('alt', 'Show thumbnail');
      showImg.setAttribute('src', show.image.original);
      // showImg.setAttribute('min-width', 315);
      // showImg.setAttribute('max-width', 315);
      // showImg.setAttribute('height', 450);
      showComments.setAttribute('id', `comment${show.id}`);
      showLikes.setAttribute('id', `likes${show.id}`);
      showTitle.classList.add('showTitle');
      showImg.classList.add('showImg');
      showLike.classList.add('likeButton');
      showLikes.classList.add('showLikes');
      showComments.classList.add('commentButton');
      showTitle.innerHTML = show.name;
      showLikes.innerHTML = '0 likes';
      showComments.innerHTML = 'Details';
      showComments.addEventListener('click', () => {
        popup(show);
      });
      this.addLikeEvent(showLike, show.id);
      showLi.append(showImg, showTitle, showLike, showLikes, showComments);
      homepageUl.append(showLi);
      return showLi;
    }
    return false;
  }

  updateLikeNumber = (id, likes) => {
    const showLikes = document.getElementById(`likes${id}`);
    showLikes.innerHTML = `${likes} likes`;
  };

  addLikeEvent = async (likeButton, id) => {
    likeButton.addEventListener('click', async () => {
      await this.involvement.addLike(id);
      const likes = await this.involvement.getLikesByID(`${id}`);
      this.updateLikeNumber(id, likes);
      likeButton.setAttribute('disabled', '');
    });
  };

  getShowInfo = async (url) => {
    let show;
    await fetch(url)
      .then((response) => response.json())
      .then(((response) => { show = response; }));
    return show;
  };
}

export default TVMaze;