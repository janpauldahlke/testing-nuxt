import axios from 'axios'

const url = 'http://localhost:4000/posts' // this is seeds server

export default {

  //logically this should be anoter tree of the store!
  // it should post our blog post, instead of fetching a list here
  // TODO: action to post
  async getAllFilesFromServer({ state, commit, rootState}){
    

    const ax = await axios.get(url)
    //console.log(ax.data)  
    if(ax.data.length > 0) {
      return ax.data
    }
  },


  async postNewPost({ state, commit, rootState}){

    // console.log('state', state)
    // console.log('commit', commit)
    // console.log('rootState', rootState)

    const http_post = await axios.post(url, 
      state
    )
  }

  //there should be more error handling here

}