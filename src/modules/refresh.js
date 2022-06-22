import removeAllChildElements from './remove_dom.js';
import { retrieveComments } from './api_comments.js';
import displayComment from './display.js';
import countComments from './count_comments.js';

const refresh = (url, id) => {
  const uList = document.querySelector('.comment-list');
  const commentSubtitle = document.querySelector(`#com${id}`);
  removeAllChildElements(uList);

  const data = retrieveComments(url);
  data.then((comments) => {
    let tmpList;
    if (comments.error) {
      uList.textContent = 'No comments up to now.';
      tmpList = [];
    } else {
      comments.forEach((comment) => displayComment(comment));
      tmpList = comments;
    }
    const commentsNumber = countComments(tmpList);
    commentSubtitle.textContent = `Comments (${commentsNumber})`;    
  });
};

export { refresh as default };