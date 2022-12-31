import axios from "axios";

// const apiResquest = axios.create({
//     baseURL: 'https://489a19f7-f7d2-426a-8361-230148034a79.mock.pstmn.io'
// });

const apiResquest = axios.create({
    baseURL: 'http://localhost:8081'
});

export default apiResquest;
