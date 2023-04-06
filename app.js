// const pokedex = 'https://mon-api-pokemon.vercel.app/api/v1/pokemon';

//         const pokemons = [];
//         fetch(pokedex)
//         .then(blob => blob.json())
//         .then(data => pokemons.push(...data))

//         function trouverPokemon(recherche, pokemons){
//             return pokemons.filter(pokemon =>{
//                 const regex = new RegExp(recherche,'gi');
//                 return pokemon.name.fr.match(regex);
//             })
//         }

//         function afficherResultat(){
//             const tableauResultat = trouverPokemon(this.value, pokemons);
//             const html = tableauResultat.map(pokemon =>{
//                 return `
//                 <li>
//                     <span>${pokemon.pokedexId}</span>
//                     <img src="${pokemon.sprite.regular}" width="150" height="150">
//                     <img src="${pokemon.sprite.shiny}" width="150" height="150">
//                     <a href="/">${pokemon.name.fr}</a>
//                 </li>
//                 `;

//             }).join('');
//             resultat.innerHTML = html;
//             console.log(tableauResultat);

//         }
//         const input = document.querySelector('input');
//         const resultat = document.querySelector('ul');

//         input.addEventListener('change',afficherResultat);
//         input.addEventListener('keyup',afficherResultat);