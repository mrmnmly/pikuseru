const state = {
  colorCounter: 1,
  colorPalette: [],
  currentColorId: null
}

const actions = {
  addColor ({ commit }) {
    commit('addColor');
  },
  removeColor ({ commit }, payload) {
    const indexToRemove = state.colorPalette.findIndex(obj => {
      return obj.id === payload
    });
    if (indexToRemove > -1) {
      commit('removeColor', payload)
    }
  },
  updateCurrentColorId ({ commit }, payload) {
    commit('updateColorId', payload)
  }
}

const mutations = {
  addColor (state) {
    const newColor = {
      id: state.colorCounter,
      hex: '#fff',
      name: `Color #${state.colorCounter}`
    }
    state.colorCounter++;
    state.colorPalette.push(newColor);
  },
  removeColor (state, payload) {
    state.colorPalette.splice(indexToRemove, 1);
  },
  updateColorId (state, payload) {
    state.currentColorId = payload;
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
