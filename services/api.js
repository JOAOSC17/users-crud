const { default: axios } = require("axios");

const api = axios.create({
    baseURL:"http://localhost:3000/api"
})
export default api