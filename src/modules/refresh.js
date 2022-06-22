import removeAllChildElements from './remove_dom.js';
import { retrieveComments } from './api_comments.js';
import displayComment from './display.js';

const refresh = (url) => {
  const uList = document.querySelector('.comment-list');
  removeAllChildElements(uList);

  const data = retrieveComments(url);
  data.then((comments) => {
    if (comments.error) {
      uList.textContent = 'No comments up to now.';
    } else {
      comments.forEach((comment) => displayComment(comment));
    }
  });
};

export { refresh as default };