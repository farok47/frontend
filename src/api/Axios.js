import axios from "axios";
import { url } from "./Api";
import Cookie from"cookie-universal"

const cookie=Cookie()
const token =cookie.get("ecommerce")

export const Axios=axios.create({
    baseURL:url,headers:{Authorization:`Bearer ${token}`}
})