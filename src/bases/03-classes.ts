import axios from 'axios'
import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
// export class Pokemon {

//   public id: number;
//   public name: string;

//   constructor( id: number, name: string ){
//     console.log('Contructor llamado')

//     this.id = id;
//     this.name = name;
//   }
// }

export class Pokemon {

  get imageUrl(): string {
    return `https://pokemon.com/${ this.id }.jpg`;
  }

  constructor( 
    public readonly id: number, 
    public name: string,
    // public imageUrl: string
  ){}

  scream(){
    console.log(`${ this.name.toUpperCase() }!!!`)
  }

  speak(){
    console.log(`${ this.name }, ${ this.name }`)
  }

  async getMoves(): Promise<Move[]>{
    const { data } = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/4`)

    return data.moves
  }
}

export const charmander = new Pokemon( 4, 'Charmander' );

// chamander.id = 10;
// chamander.name = 'Mew'
// console.log(chamander)
// chamander.scream()
// chamander.speak()

charmander.getMoves()