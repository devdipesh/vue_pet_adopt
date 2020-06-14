export default {
  appendPet: (state, { species, pet }) => {
    state[species].push(pet)
  }
}

// change in state is done here
// {species, pet } is process of object destructuring
