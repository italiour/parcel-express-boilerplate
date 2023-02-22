let serverPath = process.env.NODE_ENV === "development" ? "http://localhost:" : "https://yourdomain.com"

export const getData = (query='') => {
  try {
    return fetch( serverPath + '4000' + query)
    .then(response => {
      return response.json()
    }).then(data => {
      return data
    })
  } catch (error) {
    return error
  }
}
