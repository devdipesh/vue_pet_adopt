export default {
  addPet: ({ commit }, payload) => {
    commit('appendPet', payload)
  }
}
// action will change the state, but not in action, it points to mutation where all the change in state is carried out
// commit is defined in vuex
