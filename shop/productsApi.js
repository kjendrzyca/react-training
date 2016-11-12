const ProductsApi = {
  getAll (callback) {
    window.fetch('/api/products')
      .then(response => response.json())
      .then(response => callback(null, response))
      .catch(ex => {
        console.log('parsing failed', ex)
        callback(ex)
      })
  },

  getById (id, callback) {
    window.fetch(`/api/products/${id}`)
      .then(response => response.json())
      .then(response => callback(null, response))
      .catch(ex => {
        console.log('parsing failed', ex)
        callback(ex)
      })
  }
}

export default ProductsApi
