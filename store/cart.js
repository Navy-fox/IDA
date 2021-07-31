export const state = () => ({
  products: [],
  isOpen: false
})
export const mutations = {
  addProduct(state, product) {
    if (product) {
      state.products.push(product)
    }
  },
  removeProduct(state, product) {
    if (product) {
      state.products = state.products.filter(item => item.id !== product.id)
    }
  },
  toggleIsOpen(state, val) {
    state.isOpen = val || !state.isOpen
  }

}
export const actions = {}
export const getters = {}
