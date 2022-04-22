import axios from "axios";
const API_URL = process.env.API_URL
class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "user", {
        email,
        password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  register(name, email, password) {
    return axios.post(API_URL + "login", {
      name,
      email,
      password
    });
  }
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}
export default new AuthService();
