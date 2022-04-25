import axios from 'axios';
const SERVER = `http://localhost:8080`

export const memberLogin=loginRequest=>axios.post(`${SERVER}/user/signup`,loginRequest)