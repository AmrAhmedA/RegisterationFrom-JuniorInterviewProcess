import http from "../services/httpService"
import { apiUrl } from "../../config.json"
const apiEndPoint = apiUrl + "";
export function register(user) {
  return http.post(apiEndPoint, {
    firstname: user.firstname,
    secondname: user.secondname,
    email: user.email,
    phone: user.phone,
    password: user.password,
  });
}
