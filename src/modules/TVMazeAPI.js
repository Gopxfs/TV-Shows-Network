class TVMaze { 
  createShowLi = (show) => {
    const homepageUl = document.getElementById('showList')
    const showLi = document.createElement('li');
    const showImg = document.createElement('img');
    const showTitle = document.createElement('h2');
    const showLike = document.createElement('input');
    const showLikes = document.createElement('p');
    const showComments = document.createElement('button');
    showImg.setAttribute('alt', 'Show thumbnail');
    showLike.setAttribute('type', 'checkbox');
    showImg.setAttribute('src', show.image.original);
    showImg.setAttribute('height', 200);
    showTitle.innerHTML = show.name;
    showComments.innerHTML = 'Comments';
    showLi.append(showImg,showTitle,showLike,showLikes,showComments);
    homepageUl.append(showLi);
    return showLi;
  }

  getShowInfo = async (url) => {
    let show;
    await fetch(url)
    .then(response => response.json())
    .then((response => {show  = response}));
    return show;
  };
}

export default TVMaze;