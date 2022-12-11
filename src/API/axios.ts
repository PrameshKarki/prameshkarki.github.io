import axios from "axios";

const axiosInstance = axios.create({
    headers: { "X-Custom-Header": "foobar" },
    responseType: "json",
});

export default axiosInstance;
