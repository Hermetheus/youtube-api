import axios from 'axios';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: 'AIzaSyA3_o79QOsYgno6y5YG4C2Ih7NUHqP4FF0'
  }
})