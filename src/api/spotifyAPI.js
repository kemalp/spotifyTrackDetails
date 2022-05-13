import axios from "axios";
import appConfig from "../config";

const spotifyAPIClient = axios.create({
    baseURL : `${appConfig.api.baseURL}`,
    headers: {
        'Content-Type': 'application/json'
    }
})

const spotifyAPI = {
    get: spotifyAPIClient.get
}

export default spotifyAPI