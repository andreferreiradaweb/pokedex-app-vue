import { api } from './api'

type GetAllPokemonsTypes = {
  offset: string
  limit: string
}

export const PokemonsService = {
  getAllPokemons: async ({ offset = '8', limit = '8' }: GetAllPokemonsTypes) => {
    const { data } = await api.get(`/pokemon/?offset=${offset}&limit=${limit}`)
    return data
  }
}