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

  async createNewPost({state, commit, rootState}, post ){

    try {
      const create = await axios.post(
        url,
        post
      )

      return create // do not forget to return this

    } catch(error) {
      console.log(error)
    }

  }
}
