export default {
  animalsCount: (state) => {
    return state.cats.length + state.dogs.length
  },
  getDogs: (state) => {
    return state.pets.filter((pet) => {
      return pet.species === 'dog'
    })
  }
}
