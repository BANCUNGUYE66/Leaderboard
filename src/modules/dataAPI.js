const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lbwVf5MAih6WRIg0Iy2X/scores/';

const postData = async (response, data) => {
  response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      user: document.querySelector('#name').value.trim(),
      score: document.querySelector('#score').value.trim(),
    }),
  });
  data = response.json();
  return data;
};
export default postData;