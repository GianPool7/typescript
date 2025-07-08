export const pokemonIds=[1,20,30,34,66];

pokemonIds.push(+'1');

interface Pokemon{
    id:number;
    name:string;
    // con ese signo de pregunta, el campo puede venir o no cuando se envia 
    age?:number;
}

export const bulbasu:Pokemon ={
    id:1,
    name:"bulbasaur"
}

export const charmander:Pokemon={
    id: 2,
    name: "charmander"
}

export const pikachu:Pokemon={
    id: 3,
    name: "pikachu"
}

export const pokemons:Pokemon[]=[];

pokemons.push(charmander,bulbasu,pikachu)

console.log(pokemons);

