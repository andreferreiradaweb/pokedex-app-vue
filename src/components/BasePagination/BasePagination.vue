<template>
  <div class="base-pagination">
    <BaseCards :cards-data="pokemons" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { mapState } from 'vuex'
import { PokemonsService } from '@/services/pokemons'
import BaseCards from '@/components/BaseCards/BaseCards.vue'

export default defineComponent({
  name: "BasePagination",
  components: {
    BaseCards
  },
  data() {
    return {
      pokemons: {
        type: Array,
        default: () => [{
          name: '',
          id: '',
          imageUrl: ''
        }]
      }
    }
  },
  created() {
    this.getAllPokemons()
  },
  methods: {
    async getAllPokemons() {
      const { results } = await PokemonsService.getAllPokemons({ offset: '0', limit: '8' })
      const serializedResults = results.map(({ name, url }) => {
        const pokemonId = url.substr(-2, 1)
        return {
          name,
          id: pokemonId,
          imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
        }
      })
      this.pokemons = serializedResults
    }
  }
})
</script>
<style lang="scss" src="./styles.scss"></style>
