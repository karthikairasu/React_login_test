import axois from 'axios';

function AuthUser() {
    const http = axois.create({
        baseURL:"http://api.ansara.in/api/login",
        headers:{
            "Content-type" : "application/json"
        }

    });
  return {
    http
}
}

export default AuthUser