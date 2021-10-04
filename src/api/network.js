import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
axios.defaults.timeout = 5000
export default {
  get: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.get(path, {
        params: data
      })
        .then(function (obj) {
          resolve(obj.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  },
  post: function (path = '', data = {}) {
    return new Promise(function (resolve, reject) {
      axios.post(path, data)
        .then(function (obj) {
          resolve(obj.data)
        })
        .catch(function (error) {
          reject(error)
        })
    })
  }
}
