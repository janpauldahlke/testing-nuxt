import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      fooState: null
    },
  })
}

export default createStore