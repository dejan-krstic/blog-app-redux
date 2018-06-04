import {url, imageUrl} from '../constants/constants'
import "babel-polyfill";
import axios from 'axios'

class DataService {

    async postData(url,title,body, config){
        return await axios({
            method: 'post',
            url: url+config,
            data: {
                'title': title,
                'body': body
            },
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
    }
}

const data = new DataService()

export default data