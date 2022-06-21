class Involvement {
  constructor() {
   this.baseURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
   this.appID = 'wWiBGZy0Ro0ezfkPSzh8';
  }

  addLike = (id) => {
      fetch (`${this.baseURL}/apps/${this.appID}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        "item_id": `${id}`,
      }),
    });
  };

  getLikes = async () => {
    await fetch (`${this.baseURL}/apps/${this.appID}/likes`)
  };

  createApp = async () => {
    await fetch(`${this.baseURL}/apps/`, {
      method: 'POST',
    })
  };
}

export default Involvement;