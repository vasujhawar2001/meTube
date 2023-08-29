import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';

const options = {
  url: BASE_URL,  
  params: {
    maxResults: 50
  },
  headers: {
    'X-RapidAPI-Key': process.env.YT_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchAPI = async(url) =>{
    const response = await axios.get(`${BASE_URL}/${url}`,
    options)

    return response.data;
}