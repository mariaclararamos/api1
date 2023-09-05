import axios from 'axios';

const APIs = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
    


});
export default APIs;