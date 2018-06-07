import axios from 'axios'

export default {
  async getAllFilesFromServer({ state, commit, rootState}){
    const url = 'http://localhost:4000/posts' // this is seeds server
    

    const ax = await axios.get(url)
    //console.log(ax.data)  
    if(ax.data.length > 0) {
      return ax.data
    }
  }
}