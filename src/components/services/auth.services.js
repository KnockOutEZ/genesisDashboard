import axios from "axios";
const API_URL = "https://rest-api-portfolio-production.up.railway.app/"
class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "login", {
        email,
        password
      })
      .then(response => {
        if (response.data.token) {
          localStorage.setItem("user", JSON.stringify(response.data.token));
          localStorage.setItem("userid", JSON.stringify(response.data.id));
        }
        return response.data;
      });
  }
  logout() {
    localStorage.removeItem("user");
    localStorage.removeItem("userid");
  }
  register(name, email, password) {
    return axios.post(API_URL + "users", {
      name,
      email,
      password
    });
  }
  getCurrentUser() {
    return (JSON.parse(localStorage.getItem('user')),JSON.parse(localStorage.getItem('userid')));
  }
}
export default new AuthService();
