const removeAllChildElements = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

export { removeAllChildElements as default };