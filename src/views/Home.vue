<template>
  <div class="home-view-container">
    <h1>Adopt new friend in your family.</h1>
    Total: {{ animalsCount }} | Dogs: {{ getDogs.length }}
    <button class="btn btn-primary" @click="toggleShowForm">Add a pet</button>
    <b-form @submit.prevent="handleSubmit"  v-if="showAddForm">
      <b-form-group id="pet-name" label="Pet's Name:" label-for="pet-name-2">
        <b-form-input id="pet-name-2" v-model="formData.name" required placeholder="Enter name"></b-form-input>
      </b-form-group>

      <b-form-group id="pet-age" label="Pet's Age:" label-for="pet-age-2">
        <b-form-input id="pet-age-2" v-model="formData.age" required placeholder="Enter age" type="number"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select id="input-3" v-model="formData.species" :options="['cats', 'dogs']" required></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'Home',

  data () {
    return {
      showAddForm: false,
      formData: {
        name: '',
        age: 0,
        species: null
      }
    }
  },

  computed: {
    ...mapGetters([
      'animalsCount',
      'getDogs'
    ])
  },

  methods: {
    ...mapActions([
      'addPet'
    ]),
    toggleShowForm () {
      this.showAddForm = !this.showAddForm
    },
    handleSubmit () {
      const { species, age, name } = this.formData
      const payload = {
        species,
        pet: {
          name,
          age
        }
      }
      this.addPet(payload)
      this.formData = {
        name: '',
        age: 0,
        species: null
      }
    }
  }
}
</script>
