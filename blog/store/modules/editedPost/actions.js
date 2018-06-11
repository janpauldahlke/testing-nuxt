import axios from 'axios'
const url = 'http://localhost:4000/posts' // this is seeds server

export default {
  async getAllFilesFromServer({ state, commit, rootState}){

    const ax = await axios.get(url)
    //console.log(ax.data)
    if(ax.data.length > 0) {
      return ax.data
    }
  },

  async createNewPost({state, commit, rootState} ){

    try {
      const create = await axios.post(
        url,
        {
          title: state.title,
          postPreview: state.postPreview,
          content: state.content,
          author: state.author,
          thumbnail: state.thumbnail,
        }
      )
    } catch(error) {
      console.log(error)
    }

  }
}
