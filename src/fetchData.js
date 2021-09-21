import axios from 'axios'

/**
 * excute callback function
 * @param {*} fn
 */
export const fetchData = (fn) => {
  axios.get('http://www.dell-lee.com/react/api/demo.json').then((res) => {
    fn(res.data)
  })
}

export const fetchDataPromise = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo.json')
}

export const fetchData404 = () => {
  return axios.get('http://www.dell-lee.com/react/api/demo1.json')
}
