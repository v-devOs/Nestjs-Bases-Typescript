export const pokemonsIds = [1,20,30,34,66]

interface Pokemon{
  id: number,
  name: string
  age?: number
}

export const bulbasaur: Pokemon = {
  id: 1,
  name: 'bulbasaur',
}

export const chamander: Pokemon = {
  id: 4,
  name: 'Chanamnder'
}

export const pokemons: Pokemon[] = [];

pokemons.push( chamander, bulbasaur )

console.log(pokemons)