import axios from 'axios';

const baseUrl = 'https://youtube-v31.p.rapidapi.com'

const options = {
  url: baseUrl,
  params: {part: 'snippet', videoId: 'M7FIvfx5J10', maxResults: 50},
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) =>{
  const {data} = await axios.get(`${baseUrl}/${url}`, options);

  return data;
}

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
