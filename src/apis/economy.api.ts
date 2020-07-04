import axios from 'axios';
import { configs }from '../configs'

export const getPrice = async () => {
  //return axios.request({ url: process.env.REACT_APP_ECONOMIA_URL });
  return axios.request({ url: configs.apis.economia });
}