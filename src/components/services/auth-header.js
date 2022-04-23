export default function authHeader() {
    const user = localStorage.getItem('user');
    if (user) {
      return { Authorization:user};
    } else {
      return {};
    }
  }
