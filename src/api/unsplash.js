import axios from 'axios'

const ACCESS = process.env.REACT_APP_ACCESS_KEY
//create methods create instance of axios clients
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${ACCESS}` 
    }
})