const poke_container = document.getElementById("poke-container");
const poke_count = 100;
const colors = {
  fire: "#fddfdf",
  grass: "#defde0",
  electric: "#fcf7de",
  water: "#def3fd",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#f5f5f5",
  fighting: "#e6e0d4",
  normal: "#f5f5f5",
};

const fetchPokemons = async () => {
  for (let i = 1; i <= poke_count; i++) {
    await getPokemon(i);
  }
};

async function getPokemon(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  creatPokemonCard(data);
}

const creatPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const name = pokemon.name[0].toupperCase() + pokemon.name.slice(1);

  const pokemonInnerHtml = `

         <div class="img-container">
          <img
            src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png"
            alt=""
          />
        </div>
        <div class="info">
          <span class="number">#001</span>
          <h3 class="name">${name}</h3>
          <small class="type">Type <span>grass</span></small>
        </div>
  `;
  pokemonEl.innerHTML = pokemonInnerHtml;
  poke_container.appendChild(pokemonEl);
};

fetchPokemons();
