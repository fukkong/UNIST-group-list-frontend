import { create } from 'apisauce'

let BASE_URL = 'http://localhost:5000/api/v1/'

export const api = create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
})

export const baseURL = BASE_URL
