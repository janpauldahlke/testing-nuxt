export default {
  logIn(state, bool) {
    state.isLoggedIn = bool
    localStorage.setItem('isLoggedIn', JSON.stringify(true))
  },
  logOut(state) {
    state.isLoggedIn = false
    localStorage.setItem('isLoggedIn', JSON.stringify(false))
  },

  setPostIndex(state, id){
    state.postIndex = id
  },
  nullifyPostIndex(){
    state.postIndex = null
  }
}