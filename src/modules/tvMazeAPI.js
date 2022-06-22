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
    showImg.setAttribute('height', 200);
    showComments.setAttribute('id', `comment${show.id}`);
    showLikes.setAttribute('id', `likes${show.id}`);
    showTitle.innerHTML = show.name;
    showLike.innerHTML = 'like';
    showLikes.innerHTML = '0'
    showComments.innerHTML = 'Comments';
    this.addLikeEvent(showLike, show.id);
    showLi.append(showImg, showTitle, showLike, showLikes, showComments);
    homepageUl.append(showLi);
    return showLi;
    } else {
      return false;
    }
  }

  updateLikeNumber = (id, likes) => {
    const showLikes = document.getElementById(`likes${id}`);
    showLikes.innerHTML = `${likes}`;
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