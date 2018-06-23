import Vuex from 'vuex'
import modules from '~/store/modules'
import { getField, updateField } from 'vuex-map-fields';

const createStore = () => {
  return new Vuex.Store({
    modules,
    mutations: {
      updateField,
      // this needs to be done for all branches of the store? there is surely a more elegant solution to this
      set_empty_store(state){
        state.editedPost = modules.editedPost.state // this is the initalState
      }
    },
    getters: {
      getField
    },
  })
}
export default createStore
