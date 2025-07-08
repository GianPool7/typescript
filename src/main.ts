//import { pokemonIds,bulbasu,pokemons } from './bases/02-objects'
import { charmander } from './bases/03-classes'
import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>El pokemon ${charmander.name}</h1>
  </div>
`
