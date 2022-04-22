import axios from 'axios';
import authHeader from './auth-header';
const API_URL = process.env.API_URL;
class UserService {
  getPublicContent() {
    return axios.get(API_URL + 'users');
  }
  getUserBoard() {
    return axios.get(API_URL + 'user/1', { headers: authHeader() });
  }
  getModeratorBoard() {
    return axios.get(API_URL + 'skills', { headers: authHeader() });
  }
  getAdminBoard() {
    return axios.get(API_URL + '', { headers: authHeader() });
  }
}
export default new UserService();
