import axios from 'axios';

export default axios.create({
<<<<<<< HEAD
  baseURL: 'https://www.googleapis.com/youtube/v3'
})
=======
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: ''
  }
})
>>>>>>> c89b5e92858b9c865a863af0d9171cf2f1e940b5
