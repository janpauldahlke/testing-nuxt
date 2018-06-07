import Vuex from 'vuex'
import modules from '~/store/modules'
import { getField, updateField } from 'vuex-map-fields';

const createStore = () => {
  return new Vuex.Store({
    modules,
    mutations: {
      updateField
    },
    getters: {
      getField
    },
  })
}

export default createStore