import axios from 'axios';

export function getData () {
  return axios.get('api/api')
}