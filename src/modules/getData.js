const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lbwVf5MAih6WRIg0Iy2X/scores/';

const getData = async (response, data) => {
  response = await fetch(url);
  data = await response.json();
  return data;
};
export default getData;