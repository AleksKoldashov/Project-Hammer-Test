import fetch from 'auth/FetchInterceptor'


const exampleService = {}

exampleService.getPost = function (params) {
  return fetch({
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'get',
    params,
    
  })
}

exampleService.setPost = function (data) {
  return fetch({
    url: '/post',
    method: 'post',
    data: data
  })
}



export default exampleService