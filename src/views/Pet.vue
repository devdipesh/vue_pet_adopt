<template>
  <div class="home">
    <h3>{{ animal.name }} ({{ $route.params.species }})</h3>
    <p> Age: {{ animal.age }} years old. </p>
    <p> Breed: {{animal.breed}} </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      animal: {}
    }
  },

  computed: {
    ...mapState(['cats', 'dogs'])
  },

  mounted () {
    const animal = this[this.$route.params.species][this.$route.params.id]
    this.animal = animal
  }
}
</script>
