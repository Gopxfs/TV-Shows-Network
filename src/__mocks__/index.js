let howManyShows = 0;

const showCounter = () => {
  howManyShows += 1;
  return howManyShows;
};

module.exports = showCounter;