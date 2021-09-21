import { fetchData, fetchDataPromise, fetchData404 } from '../src/fetchData'

// 需要使用done参数作为
test('fetchData 运行结果', (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true
    })
    done()
  })
})

test('fetchData return Promise', () => {
  return fetchDataPromise().then(res => {
    expect(res.data).toEqual({
      success: true
    })
  })
})

test('fetchData return 404', () => {
  expect.assertions(1)
  return fetchData404().catch(error => {
    expect(error.toString().indexOf('404') > -1).toBe(true)
  })
})
