import axios from 'axios';

const URL = 'http://192.168.25.9:3333'

export const api = axios.create({
  baseURL: URL
})