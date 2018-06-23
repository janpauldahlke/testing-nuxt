export default {
  logIn(state, bool) {
    state.isLoggedIn = bool
    localStorage.setItem('isLoggedIn', JSON.stringify(true))
  },
  logOut(state) {
    state.isLoggedIn = false
    localStorage.setItem('isLoggedIn', JSON.stringify(false))
  }
}