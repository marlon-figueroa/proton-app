export default function ({ $axios }, inject) {
  // Create a custom axios instance
  const printer = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  // Set baseURL to something different
  // api.setBaseURL('http://localhost/curso/api/public/api/')

  // Inject to context as $api
  inject('printer', printer)
}
