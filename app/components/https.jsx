import axios from 'axios'

export default axios.create({
  baseURL: `${process.env.REACT_APP_API}/en/api`,
  headers: { 'Content-Type': 'multipart/form-data' },
})
