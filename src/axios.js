import axios from "axios";
let instance = axios.create({
    baseURL: "http://localhost:3303",
    timeout: 1000,
    headers: {
        'Content-Type': "application/json"
    }
});
export default instance;