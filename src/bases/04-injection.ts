import type { Move,PokeapiResponse } from '../interface/pokeapi-response.interface';
import type {HttpAdapter} from '../api/pokeApi.adapter'
import { PokeApiAdapter,PokeApiFetchAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: HttpAdapter
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        //const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')
        // console.log( data.moves[0].move.name );
        console.log( data.moves);
        
        return data.moves;
    }

}

const pokeApiFetch = new PokeApiFetchAdapter();
const pokeApi=new PokeApiAdapter();

export const charmander = new Pokemon( 4, 'Charmander',pokeApiFetch );

charmander.getMoves();