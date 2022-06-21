class TVMaze {
  getShowInfo = async (url) => {
    let show;
    await fetch(url)
    .then((response => {show  = response}));
    console.log(show);
    return show;
  };
}

export default TVMaze;