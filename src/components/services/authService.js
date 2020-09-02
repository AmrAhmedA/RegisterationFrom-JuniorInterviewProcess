import http from "../services/httpService"
import { apiUrl } from "../../config.json"
const apiEndPoint = apiUrl + "";
export function login(user) {
    return http.post(apiEndPoint, {
        email: user.email,
        password: user.password,
    });
}
