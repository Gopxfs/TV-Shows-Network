const displayComment = (info) => {
  const uList = document.querySelector('.comment-list');

  const commentCont = document.createElement('li');
  commentCont.classList.add('li-pop');
  const day = `${info.creation_date.slice(-2)}`;
  const month = `${info.creation_date.slice(5, 7)}`;
  const year = `${info.creation_date.slice(0, 4)}`;
  const date = `${day}/${month}/${year}`;
  commentCont.textContent = `${date} ${info.username}: ${info.comment}`;

  uList.appendChild(commentCont);
};

export { displayComment as default };