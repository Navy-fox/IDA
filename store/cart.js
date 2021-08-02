export const state = () => ({
  products: [],
  isOpen: false
})
export const mutations = {
  addProduct(state, product) {
    if (product) {
      state.products.push(product)
      console.log('yes')
    }
  },
  removeProduct(state, product) {
    if (product) {
      const index = state.products.findIndex(i => i.id === product.id)
      state.products.splice(index, 1)
    }
  },
  toggleIsOpen(state, val) {
    state.isOpen = val || !state.isOpen
  },
  clearProducts(state) {
    state.products = []
  }
}
export const actions = {}
export const getters = {}
