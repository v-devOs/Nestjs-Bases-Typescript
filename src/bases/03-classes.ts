
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

  constructor( 
    public readonly id: number, 
    public name: string ){}
}

export const chamander = new Pokemon(4, 'Charmander');

// chamander.id = 10;
// chamander.name = 'Mew'