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

  async getSinglePostFromServer({state, commit, rootState}, id){
    try {
      const singlePost = await axios.get(`${url}/${id}`)
      return singlePost.data
    } catch(err) {
      console.log(err)
    }
  },

  async createNewPost({state, commit, rootState}, post ){
    try {
      const createdPost = await axios.post(
        url,
        post
      )

      return createdPost // do not forget to return this

    } catch(error) {
      console.log(error)
    }
  },

  async editPost({}, post){
    console.log('calling the editPost', post )
    try {
      const editedPost = await axios.put(
        `${url}/${post.id}`,
        post
      )
      return editedPost
    } catch (err) {
      console.log(err)
    }
  },

  async deletePost(id){
    try{
      const deletedPost = await axios.delete(`${url}/${id}`)
      return deletedPost
    } catch(err) {
      console.log(err)
    }
  },
}
