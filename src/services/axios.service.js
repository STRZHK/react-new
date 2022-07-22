import axios from "axios";

import {baseURL} from "../contstants";

const axiosService = axios.create({baseURL});

export {
    axiosService
}