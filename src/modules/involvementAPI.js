class Involvement {
  constructor() {
    this.baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
    this.appID = 'wWiBGZy0Ro0ezfkPSzh8';
  }

  addLike = async (id) => {
    await fetch(`${this.baseURL}/apps/${this.appID}/likes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        item_id: `${id}`,
      }),
    });
  };

  getLikes = async () => {
    const response = await fetch(`${this.baseURL}/apps/${this.appID}/likes`)
      .then((response) => response.json());
    return response;
  };

  getLikesByID = async (id) => {
    const showData = await this.getLikes();
    const showLikes = showData.find((show) => show.item_id === id);
    return showLikes.likes;
  };

  createApp = async () => {
    await fetch(`${this.baseURL}/apps/`, {
      method: 'POST',
    });
  };
}

export default Involvement;