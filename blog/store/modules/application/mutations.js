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
  },
  toggleModal(state, blob ){ // we need default values here
    state.showLightBox = !state.showLightBox
    if(state.showLightBox) {
      state.lightBox = {
        title : blob.title,
        message: blob.message,
      }
    }
  },
}