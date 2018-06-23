export default {
  isLoggedIn () {
    if(process.browser){
      return localStorage.getItem('isLoggedIn')
    }
  }
}