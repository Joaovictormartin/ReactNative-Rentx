import axios from 'axios';

const URL = 'http://192.168.25.2:3333'

export const api = axios.create({
  baseURL: URL
})